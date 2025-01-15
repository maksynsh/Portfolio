import gts from 'gts/.prettierrc.json' with { type: 'json' }

/** @type {import('prettier').Config} */
export default {
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-classnames'],
  ...gts,
  bracketSpacing: true,
  trailingComma: 'all',
  printWidth: 80,
  semi: false,
  endingPosition: 'absolute-with-indent',
  customAttributes: ['class'],
}
