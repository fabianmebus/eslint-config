module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  globals: {
    ai: true,
    ac: true,
  },
  rules: {
    'no-console': 'warn',
    'no-alert': 'error',
    'no-else-return': 'error',
    'no-fallthrough': 'warn',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-with': 'error',
    'array-callback-return': 'error',
    'guard-for-in': 'error',
    'no-unneeded-ternary': 'error',
    eqeqeq: ['error', 'allow-null'],
    'no-param-reassign': 'off',
    'no-case-declarations': 'off',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-func-assign': 'error',
  },
};