module.exports = {
  root: true,
  plugins: ['prettier', '@typescript-eslint'],
  extends: ['eslint-config-airbnb-typescript-prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 2019,
  },
  env: {
    es2021: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'import/order': [
      1,
      {
        alphabetize: { order: 'asc', caseInsensitive: false },
      },
    ],
    'no-magic-numbers': 1,
    '@typescript-eslint/ban-ts-comment': 0,
  },
};
