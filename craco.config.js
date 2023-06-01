const CracoLessPlugin = require('craco-less');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path');


/* craco.config.js */
module.exports = {
  devServer: {
    port: 3000,
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
          sourceMap: true,
        },
        resolveUrlLoaderOptions: {
          silent: true,
        },
      },
    },
  ],
  webpack: {
    configure: (webpackConfig, { paths }) => {
      if (process.env.NODE_ENV !== 'development') {
        // eslint-disable-next-line no-multi-assign
        paths.appBuild = webpackConfig.output.path = path.resolve('build/', 'v2');
        const publicUrl = `${process.env.PUBLIC_URL || process.env.PUBLIC_PATH}/v2/`;
        paths.publicUrlOrPath = publicUrl;
        webpackConfig.output.publicPath = publicUrl;
      }

      return webpackConfig;
    },
    plugins: [new NodePolyfillPlugin({ excludeAliases: ['console'] })],
  },
};
