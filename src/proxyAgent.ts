import { load } from "cheerio";
import createHttpProxyAgent from "http-proxy-agent";

export const getAgent = async (options: { log: boolean }) => {
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

  let ip = ip_addresses[Math.floor(Math.random() * ip_addresses.length)];
  if (options.log) console.log("Using proxy: ", ip);
  return createHttpProxyAgent(ip);
};
