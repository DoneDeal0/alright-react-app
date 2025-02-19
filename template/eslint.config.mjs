import importHelpers from "eslint-plugin-import-helpers";
import unusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "eslint-rules/*",
      "dist/**",
      ".storybook/**",
      "storybook-static/**",
      "custom.d.ts",
      "eslint.config.mjs",
      "webpack.config.js",
      "build",
      "jest.swc.config.js"
    ],
  },

  ...fixupConfigRules(
    compat.extends(
      "plugin:react/recommended",
      "plugin:storybook/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "plugin:testing-library/react",
      "plugin:react-hooks/recommended",
      "prettier",
    ),
  ),

  // Plugin and rule setup
  {
    plugins: {
      "import-helpers": importHelpers,
      "unused-imports": unusedImports,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
        tsConfigRootDir: __dirname,
      },
    },

    rules: {
      // Best practices and style
      complexity: "error",
      "no-console": ["error", { allow: ["warn", "error", "info"] }],

      // Import rules
      "import-helpers/order-imports": [
        "error",
        {
          groups: ["absolute", "/^react$/", "module", "/^@/", "parent", "sibling", "index"],
          alphabetize: { order: "asc" },
        },
      ],
      "sort-imports": ["error", { ignoreDeclarationSort: true }],
      "unused-imports/no-unused-imports": "error",

      // React and hooks
      "react/react-in-jsx-scope": "error",
      "react-hooks/exhaustive-deps": "error",
      "react-hooks/rules-of-hooks": "error",

      // TypeScript-specific rules
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^React$" }],
      "@typescript-eslint/unbound-method": "error",
    },
  },
];