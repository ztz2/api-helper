const { defineConfig } = require('@vue/cli-service');
// eslint-disable-next-line import/no-extraneous-dependencies
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3211,
    proxy: {
      '/app': {
        ws: true,
        changeOrigin: true,
        target: 'http://localhost:3210',
      },
    },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            // 匹配规格
            test: /\.js$|\.html$|\.css$|\.png$/,
            // 文件超过多大进行压缩
            threshold: 10240,
            // 是否删除源文件（建议不删除）
            deleteOriginalAssets: false,
          }),
        ],
      };
    }
  },
  chainWebpack(config) {
    config.plugin('html').tap((args) => {
      args[0].title = 'API Helper';
      return args;
    });
  },
});
