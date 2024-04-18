import * as path from 'path';
import fg from 'fast-glob';
import to from 'await-to-js';
import fs from 'fs-extra';
import lodash from 'lodash';
import { osLocale } from './os-locale';
import { toUnixPath } from '../tools/util';

import './lang/en.json';
import './lang/zh-cn.json';

export default class Locales {
  static memoLocale: string | null = '';
  static memoLocales: Array<string> | null = null;
  static memoLocaleMap : Recordable | null = null;

  private locale = 'en';
  private locales: Array<string> = [];
  private localeMap: Recordable = {};
  private initialized = false;
  async init() {
    // 获取当前文件夹下语言
    if (Locales.memoLocales && Locales.memoLocaleMap) {
      this.locales = Locales.memoLocales;
      this.localeMap = Locales.memoLocaleMap;
    } else {
      const files = await fg(toUnixPath(path.join(__dirname, './lang/**/*.json')), { cwd: process.cwd(), absolute: true, objectMode: true });
      // 从lang中获取所有语言配置
      for (const fileObj of files) {
        try {
          let { name, path } = fileObj;
          name = name.replace(/\.json$/, '');
          this.localeMap[name] = await fs.readJson(path);
          this.locales.push(name);
        } catch {}
      }
      Locales.memoLocales = this.locales;
      Locales.memoLocaleMap = this.localeMap;
    }

    // 获取当前操作系统语言
    if (Locales.memoLocale) {
      this.locale = Locales.memoLocale;
    } else {
      const [error, local] = await to(osLocale());
      if (!error) {
        this.locale = local.includes('zh') ? 'zh-cn' : this.locales.includes(local) ? local : 'en';
      }
      Locales.memoLocale = this.locale;
    }

    this.initialized = true;

    return this;
  }

  setLocale(locale: string) {
    this.locale = locale;
  }

  getLocale() {
    return this.locale;
  }

  get(key: string, defaultValue = ''): string {
    return lodash.get(this.localeMap[this.locale], key, defaultValue);
  }

  $t(key: string, defaultValue = ''): string {
    return this.get(key, defaultValue);
  }
}
