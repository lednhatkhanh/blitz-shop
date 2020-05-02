module.exports = {
  extends: ['react-app', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  rules: {
    'import/no-anonymous-default-export': 'error',
    'import/no-webpack-loader-syntax': 'off',
  },
};
