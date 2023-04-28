import { load } from "cheerio";
import createHttpProxyAgent from "http-proxy-agent";
let ip_addresses: string[] = [];
let proxyProviders = [
  "https://www.sslproxies.org/",
  "https://free-proxy-list.net/",
  "https://www.us-proxy.org/",
  "https://free-proxy-list.net/uk-proxy.html",
  "https://free-proxy-list.net/anonymous-proxy.html",
];
let proxyProviderIndex = 0;
export const getAgent = async (options: { log: boolean }) => {
  while (ip_addresses.length === 0) {
    ip_addresses = [];
    const response = await fetch(proxyProviders[proxyProviderIndex % proxyProviders.length]);
    const html = await response.text();
    const $ = load(html);
    $("tr").each(function () {
      const ip = $(this).find("td:nth-child(1)").text();
      const port = $(this).find("td:nth-child(2)").text();
      const isSupportingGoogle =
        $(this).find("td:nth-child(6)").text() === "yes";
      const ssl = $(this).find("td:nth-child(7)").text() === "yes";
      const protocol = ssl ? "https" : "http";
      if (isSupportingGoogle) {
        ip_addresses.push(`${protocol}://${ip}:${port}`);
      }
    });
    proxyProviderIndex++;
  }
  const ip = ip_addresses[0];
  ip_addresses.shift();
  if (options.log)
    console.log(
      `Using proxy: ${ip} (from: ${
        proxyProviders[(proxyProviderIndex-1) % proxyProviders.length]
      }, remaining ip addresses: ${ip_addresses.length})`
    );
  return createHttpProxyAgent(ip);
};
