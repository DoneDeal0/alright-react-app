import webpackConfig from "../webpack.config";
const _webpackConfig = webpackConfig({ WEBPACK_SERVE: true });

export default {
  stories: ["../**/stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      fastRefresh: true,
    },
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        ..._webpackConfig.resolve,
      },
      module: {
        ...config.module,
        rules: [..._webpackConfig.module.rules],
      },
    };
  },
  docs: {
    autodocs: true,
  },
};
