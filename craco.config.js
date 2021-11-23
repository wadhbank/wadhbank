// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
// antd documentation https://ant.design/docs/react/customize-theme
// antd documentation complete less
// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
