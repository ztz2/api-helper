const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const packageJSON = require('./package.json');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'api-helper-core.js',
    path: path.resolve(__dirname, ''),
    library: 'apihCore',
    libraryTarget: 'umd',
    environment: {
      // 关闭输出头部代码使用const关键字
      const: false,
      // 关闭输出头部代码使用箭头函数
      arrowFunction: false
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(process.cwd(), './src')
    },
    fallback: {
    //   http: require.resolve('stream-http'),
    //   https: require.resolve('https-browserify')
      path: require.resolve('path-browserify'),
      fs: require.resolve('browserify-fs'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            target: 'ES5',
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // 不将注释提取到单独的文件中
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new webpack.BannerPlugin(
      `${packageJSON.name} v${packageJSON.version}
(c) 2023-present ${packageJSON.author.name}
Released under the MIT License.`
    ),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
          APP_ENV: JSON.stringify('browser')
        },
        cwd: function () {
          return '';
        }
      }
    })
  ]
};
