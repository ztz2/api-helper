module.exports = {
  globals: {},
  preset: 'ts-jest',
  transform: {
    '^.+\.(jsx|tsx|ts|cjs|js|html)$': 'ts-jest',
  },
  collectCoverageFrom: [
    '**/*.test.{js,jsx,tsx,ts}',
    '**/*__test__/*.{js,jsx,tsx,ts}'
  ],
  cacheDirectory: 'node_modules/.cache/jest',
  transformIgnorePatterns: [
    '\\/node_modules\\/(?!(lodash-es|ora\\/)\\/)'
  ]
}
