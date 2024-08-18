import cypress from "eslint-plugin-cypress";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("plugin:cypress/recommended", "eslint:recommended"), {
    plugins: {
        cypress,
    },

    languageOptions: {
        globals: {
            ...cypress.environments.globals.globals,
            ...globals.node,
        },

        ecmaVersion: 12,
        sourceType: "module",
    },

    rules: {
        "cypress/assertion-before-screenshot": "warn",
        "cypress/no-assigning-return-values": "error",
        "cypress/no-async-tests": "error",
        "cypress/no-pause": "error",
        "cypress/no-unnecessary-waiting": "warn",
    },
}];