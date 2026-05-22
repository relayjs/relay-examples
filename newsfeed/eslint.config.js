import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import relay from "eslint-plugin-relay";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist/", "src/__generated__/", "schema.ts"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      relay,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "warn",
      "relay/graphql-syntax": "error",
      "relay/graphql-naming": "error",
      "relay/unused-fields": "warn",
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["data/**/*.ts", "server.ts", "vite.config.ts"],
    languageOptions: {
      globals: globals.node,
    },
  },
);
