module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '9'
        }
      }
    ],
    '@babel/preset-typescript'
  ]
};
