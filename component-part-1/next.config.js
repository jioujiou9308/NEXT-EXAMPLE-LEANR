/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: [
      "en-US",
      "en-GB",
      "es",
      "de",
      "fr",
      "pl",
      "it",
      "nl",
      "ko",
      "ja",
      "zh-TW",
      "zh-CN",
    ],
    defaultLocale: "en-US",
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "x-custom-header",
            value: "my custom header value",
          },
          {
            key: "x-another-custom-header",
            value: "my other custom header value",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
