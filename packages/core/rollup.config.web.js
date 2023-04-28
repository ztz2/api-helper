const commonjs = require('@rollup/plugin-commonjs');
const { defineConfig } = require('rollup');
const typescript = require('@rollup/plugin-typescript');

exports.default = defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'api-helper-core.js',
    exports: 'default',
    name: 'apiHelperCore',
    format: "umd",
  },
  plugins: [
    commonjs({
      include: 'src/lib/utils/template/art-template-web.js',
      requireReturnsDefault: 'auto',
    }),
    typescript({
      sourceMap: false,
      exclude: "node_modules/**",
      typescript: require("typescript"),
    })
  ],
});
