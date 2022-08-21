module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    '@typescript-eslint/consistent-type-imports': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
