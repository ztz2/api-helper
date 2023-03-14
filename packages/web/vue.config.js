const { defineConfig } = require('@vue/cli-service');

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
  configureWebpack: {
    plugins: [],
  },
  chainWebpack(config) {
    config.plugin('html').tap((args) => {
      args[0].title = 'API Helper';
      return args;
    });
  },
});
