

import js from "@eslint/js";
import next from "eslint-config-next/core-web-vitals.js";
import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // Base JavaScript (ESLint officiel)
  js.configs.recommended,

  // Configuration Next.js officielle (Core Web Vitals)
  ...next,

  // Définition globale du contexte (navigateur, Node, ES2022)
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Règles personnalisées (adaptées à ton portfolio / site vitrine)
  {
    rules: {
      // --- Next.js / React ---
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "react/jsx-no-target-blank": "warn",

      // --- Bonnes pratiques ---
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-unused-vars": [
        "warn",
        { vars: "all", args: "after-used", ignoreRestSiblings: true },
      ],
      "no-undef": "error",

      // --- Style ---
      "semi": ["error", "always"],
      "quotes": ["warn", "double"],
      "indent": ["warn", 2, { SwitchCase: 1 }],
    },
  },
];
