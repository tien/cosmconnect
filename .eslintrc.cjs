module.exports = {
  root: true,
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
  },
};
