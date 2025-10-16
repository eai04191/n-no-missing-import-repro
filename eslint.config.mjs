import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import pluginNode from "eslint-plugin-n";

/** @type {import('typescript-eslint').Config} */
const config = defineConfig(
  {
    name: "typescript parser config",
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  eslint.configs.recommended,
  {
    ...pluginNode.configs["flat/recommended-module"],
    files: ["scripts/**/*.ts", "scripts/**/*.js", "eslint.config.mjs"],
    rules: {
      ...pluginNode.configs["flat/recommended-module"].rules,
      "n/prefer-node-protocol": "error",
      // my package is not published to npm
      "n/no-unpublished-import": "off",
    },
  }
);

export default config;
