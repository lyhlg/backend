module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import-order'],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-confusing-arrow': ['error', { allowParens: true }],
    // 'import-order': 1,
    'react/prop-types': 0,
  },
  // settings: {
  //   react: {
  //     pragma: "React",
  //     version: "detect"
  //   },
  //   "import/resolver": {
  //     webpack: {
  //       config: "./webpack.config.js"
  //     }
  //   }
  // },
  parser: '@typescript-eslint/parser',
};
