module.exports = {
  extends: [
    'fbjs/strict',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:relay/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['babel', 'flowtype', 'prettier', 'react', 'relay'],
  rules: {
    'no-console': 'off',
    'one-var': 'off',
    'react/prop-types': 'off', // Replaced by flow types

    // Mutations aren't located in the same file as Components
    'relay/unused-fields': 'off',
    'relay/generated-flow-types': 'off',

    // Strict Flow linting
    'flowtype/array-style-complex-type': 'error',
    'flowtype/array-style-simple-type': 'error',
    'flowtype/newline-after-flow-annotation': ['error', 'never'],
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-existential-type': 'error',
    'flowtype/no-mutable-array': 'error',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-unused-expressions': 'error',
    'flowtype/no-weak-types': 'error',
    'flowtype/require-parameter-type': ['error', {excludeArrowFunctions: true}],
    'flowtype/require-return-type': 'off', // Too strict
    'flowtype/require-types-at-top': 'error',
    'flowtype/require-valid-file-annotation': 'error',
    'flowtype/require-variable-type': 'off', // Too strict
    'flowtype/sort-keys': 'error',
  },
  settings: {
    react: {
      version: '16.8.1',
      flowVersion: '0.94.0',
    },
  },
};
