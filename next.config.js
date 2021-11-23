/* eslint-disable @typescript-eslint/no-var-requires */
const withAntdLess = require("next-plugin-antd-less");
module.exports = {
  reactStrictMode: true,
  compress: false,
};

module.exports = withAntdLess({
  lessVarsFilePath: "./styles/antd-custom.less",
  cssLoaderOptions: {},
  webpack(config) {
    return config;
  },
});
