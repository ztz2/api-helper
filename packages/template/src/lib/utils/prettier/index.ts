import { Options } from 'prettier';

import prettier from './standalone.js';
import parserBabel from './parser-babel.js';
import parserHtml from './parser-html.js';
import parserTypescript from './parser-typescript.js';

export default function formatCode(code = '', options: Options & { codeType?: string } = {}) {
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
