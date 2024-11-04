
import globals from "globals";
// import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
   { languageOptions: { globals: globals.browser } },
   // pluginJs.configs.recommended,
   {
      "rules": {
         "semi": ["warn", "always"],
         // "semi": ["warn", "always", { "fixable": true }],
         // "quotes": ["error", "double"]
      }
   }
];