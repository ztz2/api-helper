declare type ArtTemplate = {
    render(source: string, data?: Recordable): string;
    readonly defaults: {
        escape: boolean;
        minimize: boolean;
        rules: Array<{
            test: RegExp;
        }>;
    };
};
declare const artTemplate: ArtTemplate;
export default artTemplate;
