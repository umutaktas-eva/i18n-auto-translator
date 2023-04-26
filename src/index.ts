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
    } 
    else if(typeof obj[key] === "function") {
      const fn = obj[key].toString();
      const matches = fn.match(/(?<=\`)(.*?)(?=\`)/g);
      if(matches) {
        for(const match of matches) {
          const translated = await translate(match, to);
          fn.replace(match, translated.text);
        }
      }
      newObj[key] = fn;
    }
    else {
      newObj[key] = (await translate(obj[key].toString(), to)).text;
    }
  }
  return newObj;
};

const languages = [
  {
    code: "zh-CN",
    outputFolder: "zh" 
  },
  {
    code: "es",
    outputFolder: "es"
  },
  {
    code: "tr",
    outputFolder: "tr"
  }
];

for (const language of languages) {
  for (const file of files) {
    // import the file
    const en = await import(`./en/${file}`);
    if (!en.default) continue;
    const ch = await translateObject(en.default, language.code);
    if (!fs.existsSync(homedir() + `/${language.outputFolder}`))
      fs.mkdirSync(path.join(homedir(), language.outputFolder));
    fs.writeFileSync(
      path.join(homedir(), language.outputFolder, file),
      "export default " + JSON.stringify(ch, null, 2)
    );
  }
}