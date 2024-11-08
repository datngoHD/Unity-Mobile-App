// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import js from "@eslint/js";
import { fileURLToPath } from 'url';
import globals from 'globals';
import parser from '@typescript-eslint/parser';

// mimic CommonJS variables -- not needed if using CommonJS
const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:prettier/recommended'),
  ...compat.extends('plugin:react-hooks/recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:@typescript-eslint/eslint-recommended'),
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    ignores: [
      'node_modules/',
      'ios/',
      'android/',
      'dependency-chain.json',
      'dependency-versions.json',
    ],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      }
    },
  },
];
