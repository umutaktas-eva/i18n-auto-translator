import { translate } from "@vitalets/google-translate-api";
// @ts-ignore
import request from "request";
import { load } from "cheerio";
import createHttpProxyAgent from "http-proxy-agent";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getProxy = async () => {
  let ip_addresses: string[] = [];

  let response = await fetch("https://free-proxy-list.net/");
  let html = await response.text();
  const $ = load(html);
  $("td:nth-child(1)").each(function (index, value) {
    let isSupportingGoogle =
      $(this).parent().find("td:nth-child(6)").text() === "yes";
    let ssl =
      $(this).parent().find("td:nth-child(7)").text() === "yes"
        ? "https"
        : "http";
    let ip = $(this).text();
    let port = $(this).parent().find("td:nth-child(2)").text();
    if (isSupportingGoogle) {
      ip_addresses.push(`${ssl}://${ip}:${port}`);
    }
  });

  return ip_addresses[Math.floor(Math.random() * ip_addresses.length)];
};

let currentProxy = await getProxy();
let agent = createHttpProxyAgent(`${currentProxy}`);
while (true) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1000);
    const result = await translate("Hello", {
      to: "tr",
      fetchOptions: {
        agent,
        signal: controller.signal,
      },
    });
    console.log(result.text);
    clearTimeout(timeout);
  } catch (e) {
    console.log(e);
    currentProxy = await getProxy();
    agent = createHttpProxyAgent(`${currentProxy}`);
  }
}
