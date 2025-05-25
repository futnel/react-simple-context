import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import { defineConfig } from "eslint/config"

export default defineConfig([
  // ignore folders
  {
    ignores: ["dist", "node_modules", "temp"],
  },
  // custom rules for source files
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      // Disable the base rule in favor of @typescript-eslint/no-unused-vars
      "no-unused-vars": "off",
      // Use @typescript-eslint/no-unused-vars with custom patterns
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      // Prefer 'type' over 'interface'
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    },
  },
  // recommended configs from plugins
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  pluginReact.configs.flat.recommended,
  // for React 17+ JSX transform
  pluginReact.configs.flat["jsx-runtime"],
  eslintPluginPrettierRecommended,
  // detect React version to get rid of warning that React version is not specified
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
])
