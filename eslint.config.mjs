import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );
const compat = new FlatCompat( {
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
} );

export default [
  ...compat.extends( "eslint:recommended", "plugin:@typescript-eslint/recommended" ),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],

      "max-len": ["error", {
        code: 125,
      }],

      "require-jsdoc": "off",
      "no-unused-vars": "off",
      "new-cap": "off",
      "no-tabs": "off",
      "no-trailing-spaces": "warn",
      "object-curly-spacing": ["error", "always"],
      "space-before-function-paren": ["error", "always"],
      "space-in-parens": ["error", "always"],
      camelcase: "off",

      "@typescript-eslint/no-unused-vars": ["error", {
        argsIgnorePattern: "^_",
      }],
    },
  },
];