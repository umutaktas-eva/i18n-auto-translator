import { translate as translation } from "@vitalets/google-translate-api";
import { getAgent } from "./proxyAgent.js";
import { RawResponse } from "@vitalets/google-translate-api/dist/cjs/types.js";

let agent = await getAgent();

export const translate = async (
  text: string,
  to: string,
  wait = 1000
): Promise<{
  text: string;
  raw: RawResponse;
}> => {
  let result;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), wait);
    result = await translation(text, {
      to,
      fetchOptions: {
        agent,
        signal: controller.signal,
      },
    });
    clearTimeout(timeout);
  } catch (error) {
    agent = await getAgent();
    result = await translate(text, to, wait);
  }
  return result;
};
