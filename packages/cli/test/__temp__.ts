/* tslint:disable */
/* eslint-disable */
/* prettier-ignore-start */

/* 代码生成时间： */
/* 提示：该文件由 API Helper CLI 自动生成，请勿直接修改。 */
/* 文档参考：https://github.com/ztz2/api-helper */

// @ts-ignore
// prettier-ignore
import {
  RequestFunctionRestArgsType,
  processRequestFunctionConfig,
} from '@api-helper/cli/lib/helpers';
// @ts-ignore
// prettier-ignore
import request from './__temp__/request';
// @ts-ignore
// prettier-ignore
type CurrentRequestFunctionRestArgsType = RequestFunctionRestArgsType<typeof request>;

/**
 * @description 麦谷主动安全统计 (Auth)
 * @summary Request data types
 * @url [ POST ] /api/tboxDevice/SafetyListmgTJ
 */
export interface ApiTboxDeviceSafetyListmgTjRequestByPost {
  // 主动安全事件类型ID,具体见主动安全事件类型说明
  event_type: string;
  // 前端不用传
  belonging: number;
  // 前端不用传
  dataAuthority: string;
}
/**
 * @description 麦谷主动安全统计 (Auth)
 * @summary Response data types
 * @url [ POST ] /api/tboxDevice/SafetyListmgTJ
 */
export interface ApiTboxDeviceSafetyListmgTjResponseByPost {
  // 接口返回对象
  // 状态返回编码
  status?: number;
  // 返回信息
  message?: string;
  // 返回时间戳
  timestamp?: string;
  // 日期统计
  data?: {
    aggregations?: {
      days?: {
        buckets?: Array<{
          // 日期
          key_as_string?: string;
          // 条数
          doc_count?: number;
        }>;
      };
    };
  };
}
/**
 * @description 麦谷主动安全统计 (Auth)
 * @url [ POST ] /api/tboxDevice/SafetyListmgTJ
 */
export function apiTboxDeviceSafetyListmgTjByPost(
  data: ApiTboxDeviceSafetyListmgTjRequestByPost,
  extraData?: unknown,
  ...args: CurrentRequestFunctionRestArgsType
) {
  return request<ApiTboxDeviceSafetyListmgTjResponseByPost>(
    processRequestFunctionConfig(data, extraData, apiTboxDeviceSafetyListmgTjByPost.requestConfig),
    ...args
  );
}
apiTboxDeviceSafetyListmgTjByPost.requestConfig = {
  path: '/api/tboxDevice/SafetyListmgTJ',
  method: 'POST',
  requestContentType: ['application/json'],
  formDataKeyNameList: [],
  pathParamKeyNameList: [],
  queryStringKeyNameList: [],
};
