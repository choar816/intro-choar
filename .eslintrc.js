module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb'],
  rules: {
    quotes: ['off', 'single'],
    'object-curly-newline': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
