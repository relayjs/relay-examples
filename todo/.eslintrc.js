module.exports = {
  extends: [
    'fbjs/strict',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:relay/recommended',
    'prettier/flowtype',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  plugins: ['babel', 'flowtype', 'prettier', 'react', 'relay'],
  rules: {
    'no-console': 'off',
    'one-var': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: '16.8.1',
      flowVersion: '0.92.1',
    },
  },
};
