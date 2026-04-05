import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginTailwindcss from 'eslint-plugin-better-tailwindcss';
import onlyWarn from 'eslint-plugin-only-warn';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import * as tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/**
 * A custom ESLint configuration.
 * */
export default defineConfig(
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommendedTypeChecked,
  ...compat.extends('plugin:import/recommended', 'plugin:import/typescript', 'plugin:prettier/recommended'),
  { ignores: ['dist/**', '.react-router/'] },
  {
    plugins: { '@typescript-eslint': tseslint.plugin },
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
      parser: tseslint.parser,
      ecmaVersion: 5,
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    settings: {
      'import/resolver': { typescript: { project: './tsconfig.json' } },
    },
    rules: {
      'no-undef': 'error',
      '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

      '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: false }],

      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'separate-type-imports', prefer: 'type-imports' },
      ],

      '@typescript-eslint/explicit-function-return-type': 'error',

      // Disallow invalid uses of `this`
      '@typescript-eslint/no-invalid-this': 'error',

      // Enforce explicit `this` parameter type annotations
      '@typescript-eslint/explicit-module-boundary-types': 'error',

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['parameter', 'variable'],
          leadingUnderscore: 'require',
          format: ['camelCase'],
          modifiers: ['unused'],
        },
        {
          selector: ['parameter', 'variable'],
          leadingUnderscore: 'allowDouble',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
      ],

      '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],

      '@typescript-eslint/no-extraneous-class': [
        'error',
        { allowConstructorOnly: true, allowStaticOnly: true, allowWithDecorator: true },
      ],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],

      'no-restricted-exports': [
        'error',
        {
          restrictDefaultExports: {
            direct: true,
            named: true,
            defaultFrom: true,
            namedFrom: true,
            namespaceFrom: true,
          },
        },
      ],
    },
  },
  { plugins: { 'react-refresh': pluginReactRefresh, onlyWarn: onlyWarn as any } },
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended?.languageOptions,
      globals: { ...globals.serviceworker, ...globals.browser },
    },
  },
  {
    files: ['**/*.ts?(x)'],
    plugins: { 'better-tailwindcss': pluginTailwindcss },
    rules: {
      ...pluginTailwindcss.configs.stylistic.rules,
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: path.resolve(__dirname, './app/app.css'),
        detectComponentClasses: true,
      },
    },
  },
  {
    plugins: { 'react-hooks': pluginReactHooks as any },
    settings: { react: { version: 'detect' } },
    // React scope no longer necessary with new JSX transform.
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Override rules for specific files
  {
    files: ['app/root.tsx', 'app/routes.ts', '**/*.page.tsx', '*.config.ts'],
    rules: {
      'no-restricted-exports': 'off',
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['*.config.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react-refresh/only-export-components': 'error',
    },
  },
  {
    files: ['**/*.page.tsx'],
    rules: {
      'react-refresh/only-export-components': ['error', { allowExportNames: ['loader', 'meta', 'links'] }],
    },
  },
);
