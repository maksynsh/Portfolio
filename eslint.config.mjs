import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import importPlugin from 'eslint-plugin-import'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import tailwindcssPlugin from 'eslint-plugin-tailwindcss'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    ignores: [
      'dist/**',
      'build/**',
      'node_modules/**',
      'public/**',
      '.next/**',
      '.git/**',
      '.github/**',
      '.husky/**',
      '.vscode/**',
      '**/*.config.*',
      '**/*.d.ts',
    ],
  },
  {
    plugins: {
      ['import']: importPlugin,
      ['simple-import-sort']: simpleImportSortPlugin,
      ['tailwindcss']: tailwindcssPlugin,
      ['prettier']: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'warn',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      'func-names': 'error',
      'max-len': [
        'off',
        { code: 80, ignoreUrls: true, ignoreTemplateLiterals: true },
      ],
      'no-console': 'warn',
      'no-underscore-dangle': 'off',
      'no-unused-vars': 'warn',
    },
  },
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]

export default eslintConfig
