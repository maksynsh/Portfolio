/**
 * Automatic Index (vscode snippet: df-index)
 * 1. Install the extension: JayFong.generate-index
 * 2. Press [ ⌘-K + I ] to generate the code (or invoke command 'Generate Index')
 *
 * @see vscode-generate-index https://github.com/fjc0k/vscode-generate-index
 * @see change-case https://github.com/blakeembrey/change-case/tree/main/packages/change-case
 *
 * ## Cheat Sheet
 *
 * @index(
 *    patterns: string | string[],
 *    codeGenerator: (
 *      parsedPath: {path, name, ext},
 *      changeCase: { noCase, pathCase, camelCase, ...}, // all props are fn(string) => string
 *      extraInfo: { total, index, isFirst, isLast, isDir, isFile }
 *     ) => string,
 *    globbyOptions?: GlobbyOptions,
 * ) => string
 */

//@index('./*/index.ts', (f, _, info) => `export * from '${f.path.replace('/index', '')}'`)
export * from './BentoGrid'
//@endindex

//@index('./*.tsx', f => `export * from '${f.path}'`)
export * from './BackgroundGradientAnimation'
export * from './Button'
export * from './Card'
export * from './Confetti'
export * from './FlipWords'
export * from './Globe'
export * from './GridGlobe'
export * from './MovingBorder'
export * from './Paper'
export * from './PinContainer'
export * from './RevealEffect'
export * from './Spotlight'
export * from './Tabs'
export * from './TextRevealEffect'
export * from './Timeline'
//@endindex
