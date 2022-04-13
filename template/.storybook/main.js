const webpackConfig = require("../webpack.config")({ WEBPACK_SERVE: true });

module.exports = {
  stories: ["../**/stories.tsx"],
  addons: ["@storybook/addon-essentials"],
  core: { builder: "webpack5" },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        ...webpackConfig.resolve,
      },
      module: {
        ...config.module,
        rules: [...webpackConfig.module.rules],
      },
    };
  },
};
