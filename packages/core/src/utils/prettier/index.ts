import { Options } from 'prettier';

const prettier = require('./standalone.js');
const parserBabel = require('./parser-babel.js');
const parserHtml = require('./parser-html.js');
const parserTypescript = require('./parser-typescript.js');

export function format(code = '', options: Options = {}) {
  try {
    return prettier.format(code, {
      parser: 'typescript',
      plugins: [
        parserBabel,
        parserHtml,
        parserTypescript
      ],
      semi: true,
      singleQuote: true,
      printWidth: 80,
      trailingComma: 'none',
      arrowParens: 'avoid',
      ...options
    });
  } catch (e) {
    console.warn('prettier 执行失败!', e);
  }
  return code;
}
