module.exports = {
  extends: 'airbnb',
  plugins: ['immutable'],
  rules: {
    'immutable/no-let': 2,
    'immutable/no-this': 2,
    'immutable/no-mutation': 2,
    'react/jsx-filename-extension': 'off',
  },
  overrides: [
    {
      files: '*.spec.js',
      env: {
        jest: true,
      },
    },
  ],
};
