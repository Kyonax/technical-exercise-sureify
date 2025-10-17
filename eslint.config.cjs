/**
    .___   /\                    .___                    .__
  __| _/___)/     ____  ____   __| _/____   _______ __ __|  |   ____   ______
 / __ |\__  \   _/ ___\/  _ \ / __ |/ __ \  \_  __ \  |  \  | _/ __ \ /  ___/
/ /_/ | / __ \_ \  \__(  <_> ) /_/ \  ___/   |  | \/  |  /  |_\  ___/ \___ \
\____ |(____  /  \___  >____/\____ |\___  >  |__|  |____/|____/\___  >____  >
     \/     \/       \/           \/    \/                         \/     \/

eslint.config.cjs
- [x] ESLint configuration for this project (Code Guidelines).
- [x] Enforces custom code guidelines:
      • camelCase for functions, and methods
      • snake_case for variables, and parameters
      • UPPER_SNAKE_CASE for constants
      • kebab-case for filenames (except index)
- [x] Enforces use of "@" alias instead of relative imports (../../)
- [x] Prettier Integration for formatting consistency
- [x] Uses Unicorn for filename-case enforcement

Focus:
This configuration showcases my process of adapting and creating ESLint rules
for specific project guidelines. These rules are a deliberate case to add an
extra layer of difficulty and demonstrate my ability to shape linting standards
based on team or project needs.

Note:
This is just a case scenario, I know that for other projects we follow more
standard code guidelines.

Author: Cristian D. Moreno - Kyonax
Contact: kyonax.corp@gmail.com
*/
module.exports = [
  {
    ignores: ["dist/**", "node_modules/**", ".cache/**"],
  },

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        project: ["./tsconfig.json"],
      },
      globals: {},
    },

    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      import: require("eslint-plugin-import"),
      prettier: require("eslint-plugin-prettier"),
      unicorn: (function resolvePlugin() {
        const pluginModule = require("eslint-plugin-unicorn");
        return pluginModule?.default ?? pluginModule;
      })(),
    },

    settings: {
      "import/resolver": {
        typescript: { project: "./tsconfig.json" },
        node: { extensions: [".js", ".ts"] },
      },
    },

    rules: {
      "prettier/prettier": "error",

      "import/no-unresolved": "error",
      "import/order": [
        "warn",
        {
          groups: [
            ["builtin", "external"],
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [{ pattern: "@/**", group: "internal" }],
          "newlines-between": "always",
        },
      ],

      "no-restricted-imports": [
        "error",
        {
          patterns: [
            "../*",
            "../../*",
            "../../../*",
            "../../../../*",
            "../../../../**/*",
          ],
        },
      ],

      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: ["snake_case"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        {
          selector: "function",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "method",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "variable",
          modifiers: [],
          format: ["snake_case"],
          leadingUnderscore: "allow",
        },
        {
          selector: "variable",
          modifiers: ["const"],
          format: ["UPPER_CASE"],
          leadingUnderscore: "allow",
        },
        {
          selector: "parameter",
          format: ["snake_case"],
          leadingUnderscore: "allow",
        },
        {
          selector: "objectLiteralProperty",
          format: null,
          filter: {
            regex: ".*",
            match: true,
          },
        },

        {
          selector: "property",
          types: ["string", "number", "boolean", "array"],
          format: ["snake_case", "UPPER_CASE", "camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "typeProperty",
          format: ["snake_case", "UPPER_CASE", "camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "class",
          format: ["PascalCase"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
      ],

      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: false,
          allowHigherOrderFunctions: false,
          allowConciseArrowFunctionExpressionsStartingWithVoid: false,
        },
      ],

      "@typescript-eslint/typedef": [
        "error",
        {
          arrayDestructuring: false,
          arrowParameter: true,
          memberVariableDeclaration: true,
          objectDestructuring: false,
          parameter: true,
          propertyDeclaration: true,
          variableDeclaration: false,
        },
      ],

      "@typescript-eslint/no-explicit-any": "warn",

      "unicorn/filename-case": [
        "error",
        {
          cases: {
            kebabCase: true,
          },
          ignore: ["^index$", "^index\\..*$"],
        },
      ],
    },
  },

  {
    files: ["**/*.test.ts", "**/*.spec.ts", "tests/**"],
    languageOptions: {
      globals: {
        jest: "readonly",
      },
    },
  },

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { NodeJS: "readonly" },
    },
  },
];
