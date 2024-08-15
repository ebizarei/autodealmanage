const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: false,
  i18n,
  trailingSlash: true,
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
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === "object")
      .oneOf.filter((rule) => Array.isArray(rule.use));

    // if (!dev) {
    //   rules.forEach((rule) => {
    //     rule.use.forEach((moduleLoader) => {
    //       if (
    //         moduleLoader.loader?.includes("css-loader") &&
    //         !moduleLoader.loader?.includes("postcss-loader")
    //       )
    //         moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;

    //       // earlier below statements were sufficient:
    //       // delete moduleLoader.options.modules.getLocalIdent;
    //       // moduleLoader.options.modules.localIdentName = '[hash:base64:6]';
    //     });
    //   });
    // }
    return config;
  },
};

const hashOnlyIdent = (context, _, exportName) =>
  loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${path
          .relative(context.rootContext, context.resourcePath)
          .replace(/\\+/g, "/")}#className:${exportName}`
      ),
      "md4",
      "base64",
      6
    )
    .replace(/[^a-zA-Z0-9-_]/g, "_")
    .replace(/^(-?\d|--)/, "_$1");

// const buildWorkBox = process.env.BUILD_WORKBOX === 'True';

// function applyWorkbox(nextConfig) {
//   return process.env.NODE_ENV === "production" && buildWorkBox
//     ? withWorkbox(nextConfig, {
//         workbox: {
//           swSrc: "worker.js",
//           dest: "public",
//           swDest: "app-sw.js",
//           force: true,
//           maximumFileSizeToCacheInBytes: 10485760,
//           exclude: [
//             /middleware-build-manifest\.js$/i,
//             /middleware-react-loadable-manifest\.js$/i,
//           ],
//         },
//       })
//     : nextConfig;
// }
function applySentry(nextConfig) {
  return process.env.SENTRY_INIT === "True"
    ? withSentryConfig(
        {
          ...nextConfig,
          sentry: {
            hideSourceMaps: true,
            widenClientFileUpload: true,
          },
        },
        sentryWebpackPluginOptions
      )
    : nextConfig;
}

module.exports = applySentry(nextConfig);
