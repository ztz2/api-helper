import './lang/en.json';
import './lang/zh-cn.json';
export default class Locales {
    static memoLocale: string | null;
    static memoLocales: Array<string> | null;
    static memoLocaleMap: Recordable | null;
    private locale;
    private locales;
    private localeMap;
    private initialized;
    init(): Promise<this>;
    setLocale(locale: string): void;
    getLocale(): string;
    get(key: string, defaultValue?: string): string;
    $t(key: string, defaultValue?: string): string;
}
