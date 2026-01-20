import { nextJsConfig as baseNextJsConfig } from "@workspace/eslint-config/next-js";
// this is the eslint config for the web app
/** @type {import("eslint").Linter.Config} */
const nextJsConfig = [
  ...baseNextJsConfig,
  {
    ignores: ["*.mjs"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        document: true,
        NodeJS: true,
        React: true,
        window: true,
      },
    },
  },
];

export default nextJsConfig;
