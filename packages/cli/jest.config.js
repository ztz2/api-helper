module.exports = {
  globals: {},
  preset: "ts-jest",
  transform: {
    "^.+\.(jsx|tsx|ts|js|cjs|html)$": "ts-jest",
  },
  collectCoverageFrom: [
    "**/*.test.{js,jsx,tsx,ts}",
    "**/*__test__/*.{js,jsx,tsx,ts}"
  ],
  cacheDirectory: 'node_modules/.cache/jest',
  // 下面非要从重要, 将不忽略 lodash-es, other-es-lib 这些es库, 从而使ts-jest去处理它们
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(axios))"]
}
