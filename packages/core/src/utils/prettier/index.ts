import { Options } from 'prettier';

const prettier = require('./standalone.js');
const parserBabel = require('./parser-babel.js');
const parserHtml = require('./parser-html.js');
const parserTypescript = require('./parser-typescript.js');

export function format(code = '', options: Options = {}) {
  try {
    let parser = options.parser as string;
    if ('codeType' in options) {
      parser = options.codeType as string;
    }

    if (!['javascript', 'typescript'].includes(parser)) {
      parser = 'typescript';
    }

    if (parser === 'javascript') {
      parser = 'babel';
    }

    return prettier.format(code, {
      parser,
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
