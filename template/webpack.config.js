/* eslint-env node */
const CompressionPlugin = require("compression-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const zlib = require("zlib");

const getPlugins = (isProduction) => {
  const plugins = [
    new Dotenv({
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: path.join(__dirname, "./src/assets/images/favicon.png"),
    }),
  ];
  if (isProduction) {
    plugins.push(
      new CompressionPlugin({
        filename: "[path][base].gz",
        algorithm: "gzip",
        test: /\.(js|css|ts|tsx|html)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new CompressionPlugin({
        filename: "[path][base].br",
        algorithm: "brotliCompress",
        test: /\.(js|css|ts|tsx|html|svg)$/,
        compressionOptions: {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          },
        },
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false,
      })
    );
  }
  return plugins;
};

module.exports = (env) => {
  const nodeEnv = env.WEBPACK_SERVE ? "development" : "production";
  const isProduction = nodeEnv === "production";
  const plugins = getPlugins(isProduction);
  return {
    mode: nodeEnv,
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "./build"),
      filename: "[name].[contenthash].bundle.js",
      chunkFilename: "[name].chunk.bundle.js",
      publicPath: "/",
      clean: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", "jsx", ".json"],
      alias: {
        assets: path.resolve(__dirname, "src/assets/"),
        components: path.resolve(__dirname, "src/components/"),
        pages: path.resolve(__dirname, "src/pages/"),
        src: path.resolve(__dirname, "src/"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: { loader: "swc-loader" },
        },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        { test: /\.(png|jpg|jpeg|woff2)$/, use: ["file-loader"] },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ["@svgr/webpack"],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
      open: !isProduction,
      port: 3000,
      hot: true,
    },
    plugins,
    optimization: {
      minimize: isProduction,
      minimizer: isProduction
        ? [new TerserPlugin(), new CssMinimizerPlugin()]
        : [],
      splitChunks: {
        chunks: "initial",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            name: (module, chunks) => {
              const allChunksNames = chunks.map(({ name }) => name).join(".");
              const moduleName = (module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              ) || [])[1];
              return `${moduleName}.${allChunksNames}`;
            },
          },
        },
      },
    },
  };
};

process.on("SIGINT", () => process.exit(0));
