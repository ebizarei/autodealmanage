const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: false,
  // i18n,
  trailingSlash: true,
  output: 'export',
  eslint: {
    ignoreDuringBuilds: process.env.IGNORE_ESLINT === "True" ? true : undefined,
  },
  images:{
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
    minimumCacheTTL: 0,
  },
  typescript: {
    ignoreBuildErrors:
      process.env.IGNORE_TYPE_SCRIPT === "True" ? true : undefined,
  },
  webpack(config, { dev }) {
    config.module.rules.push({
      test: /\.svg$/,
      // issuer: /\.[jt]sx?$/,
      type: "asset",
      loader: "svgo-loader",
      options: {
        multiPass: true,
        js2svg: {
          indent: 2,
          pretty: true,
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
