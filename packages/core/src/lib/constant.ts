export const LINE_FEED_CODE = String.fromCharCode(62100);
export const LINE_FEED_CODE_MAC = String.fromCharCode(62101);
export const COMMENT_START_CODE = String.fromCharCode(62200);
export const COMMENT_END_CODE = String.fromCharCode(62300);
export const UNKNOWN_GROUP_NAME = '未知分组';
export const UNKNOWN_GROUP_DESC = '未设置分组的接口集合';

export const REQUEST_TIMEOUT = 120000;
export const FORMAT_CODE_EXTENSION = <const>['.ts', '.tsx', '.js', '.jsx', '.vue', '.html', '.scss', '.less', '.css', '.json', '.java'];
export type FormatCodeExtension = typeof FORMAT_CODE_EXTENSION[number];
