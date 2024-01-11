module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  globals: {
    expect: "readonly",
    test: "readonly",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/no-unnecessary-type-constraint": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": "off",
    "react/require-default-props": "off",
    "no-underscore-dangle": "off",
    "no-nested-ternary": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "jsx-a11y/anchor-is-valid": [ "off", {
      "components": [ "Link" ]
    }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off"
  },
  ignorePatterns: [
    "**/.*.js",
    "**/*.config.js",
    "*.config.js",
    "**/*.config.ts",
    "*.config.ts",
    "vite.d.ts",
  ],
};
