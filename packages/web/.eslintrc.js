module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    Recordable: 'readonly',
    HttpMethod: 'readonly',
    require: 'readonly',
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': [
      'error', { code: 220 },
    ],
    'no-eval': 0,
    'no-shadow': 0,
    'no-plusplus': 0,
    'import/named': 0,
    'default-case': 0,
    'import/first': 0,
    'no-loop-func': 0,
    'padded-blocks': 0,
    'guard-for-in': 0,
    'no-trailing-spaces': 0,
    'no-return-await': 0,
    'no-await-in-loop': 0,
    'no-return-assign': 0,
    'import/extensions': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-nested-ternary': 0,
    'default-param-last': 0,
    'import/no-unresolved': 0,
    'lines-between-class-members': 0,
    'linebreak-style': [0, 'error', 'window'],
    'no-underscore-dangle': 0,
    'max-classes-per-file': 0,
    'no-use-before-define': 0,
    'no-restricted-syntax': 0,
    'import/no-duplicates': 0,
    'no-unused-expressions': 0,
    'no-async-promise-executor': 0,
    'import/prefer-default-export': 0,
    'prefer-promise-reject-errors': 0,
    '@typescript-eslint/ban-types': 0,
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-this-alias': 0,
    'vuejs-accessibility/anchor-has-content': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'vuejs-accessibility/click-events-have-key-events': 0,
    'vuejs-accessibility/mouse-events-have-key-events': 0,
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
