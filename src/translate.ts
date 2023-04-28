import { translate as translation } from "@vitalets/google-translate-api";
import { getAgent } from "./proxyAgent.js";
import { RawResponse } from "@vitalets/google-translate-api/dist/cjs/types.js";

let agent = await getAgent({ log: true });

export const translate = async (
  text: string,
  to: string,
  wait = 10000
): Promise<{
  text: string;
  raw: RawResponse;
}> => {
  console.log(`Translating "${text}" to ${to}...`);
  let result;
  try {
    result = await translation(text, {
      to,
      fetchOptions: {
        agent,
        signal: AbortSignal.timeout(wait),
      },
    });
  } catch (error) {
    console.log(error);
    agent = await getAgent({ log: true });
    result = await translate(text, to, wait);
  }
  return result;
};
