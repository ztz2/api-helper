const os = require('os');
// 将tsconfig的别名路径映射到jest中
const moduleNameMapper = require('tsconfig-paths-jest')(require('./tsconfig.json'));
// 忽略系统缓存路径
const tempDir = os.tmpdir();

module.exports = {
  globals: {},
  preset: 'ts-jest',
  transform: {
    '^.+\.(jsx|tsx|ts|js|cjs|html)$': 'ts-jest',
  },
  // 测试文件匹配
  collectCoverageFrom: [
    '**/*.test.{js,jsx,tsx,ts}',
    '**/*__test__/*.{js,jsx,tsx,ts}'
  ],
  // 模块文件后缀名
  moduleFileExtensions: ['ts', 'js', 'mjs'],
  // 缓存目录
  cacheDirectory: 'node_modules/.cache/jest',
  // 模块映射
  moduleNameMapper,
  // 不进行transform转换的匹配
  transformIgnorePatterns: [
    tempDir,
    '\\/node_modules\\/(?!(lodash-es|ora\\/)\\/)'
  ]
};
