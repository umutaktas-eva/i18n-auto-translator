import { translate } from "./translate.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { homedir } from "os";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const files = fs.readdirSync(path.join(__dirname, "en"));

const translateObject = async (obj: any, to: string) => {
  const newObj: any = {};
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      newObj[key] = await translateObject(obj[key], to);
    } else if (typeof obj[key] === "function") {
      const fn = obj[key].toString();
      const matches = fn.match(/(?<=\`)(.*?)(?=\`)/g);
      if (matches) {
        for (const match of matches) {
          const translated = await translate(match, to);
          fn.replace(match, translated.text);
        }
      }
      newObj[key] = fn;
    } else {
      newObj[key] = (await translate(obj[key].toString(), to)).text;
    }
  }
  return newObj;
};

const processArgs = process.argv.slice(2);

if (processArgs.length !== 2) {
  console.error("Usage node src/index.js <languageCode> <outputFolder>");
  process.exit(1);
}
const languageCode = processArgs[0];
const outputFolder = processArgs[1];

const language = {
  languageCode,
  outputFolder
}

for (const file of files) {
  try {
    const en = await import(`./en/${file}`);
    if (!en.default) continue;
    const ch = await translateObject(en.default, language.languageCode);
    if (!fs.existsSync(homedir() + `/${language.outputFolder}`))
      fs.mkdirSync(path.join(homedir(), language.outputFolder));
    fs.writeFileSync(
      path.join(homedir(), language.outputFolder, file),
      "export default " + JSON.stringify(ch, null, 2)
    );
  } catch (e) {
    console.log(e);
    continue;
  }
}
