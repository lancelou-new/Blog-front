module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "globals": {
    "document": true,
    "foo": true,
    "window": true,
    "gapi": true
  },
  "rules": {
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "react/require-default-props": "off",
    "no-use-before-define": 0,
    "prefer-destructuring": 0,
    "no-multi-assign": 0,
    'no-underscore-dangle': 0,
    'comma-dangle': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    "no-unused-expressions": ["error", { "allowShortCircuit": true }],
    "no-restricted-syntax": ["error", "WithStatement"]
  }
};