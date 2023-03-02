module.exports = {
  globals: {},
  preset: "ts-jest",
  transform: {
    "^.+\.(ts|js|html)$": "ts-jest",
  },
  collectCoverageFrom: [
    "**/*.test.{js,jsx,tsx,ts}",
    "**/*__test__/*.{js,jsx,tsx,ts}"
  ],
  cacheDirectory: 'node_modules/.cache/jest'
}
