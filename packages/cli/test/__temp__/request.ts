import { RequestFunctionConfig } from '@api-helper/cli/lib/helpers';

// 自定义配置
export type RequestOptions = {
  //
};

export default async function request<ResponseData>(config: RequestFunctionConfig, options?: RequestOptions): Promise<ResponseData> {
  return new Promise((resolve, reject) => {
    // 以axios为例的请求配置
    const requestConfig = {
      url: config.path,
      method: config.method,
      data: config.data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    // 处理表单数据请求头
    if (config.hasFormData) {
      requestConfig.headers['Content-Type'] = 'multipart/form-data';
    }
    console.log('请求配置：', requestConfig);
    // TODO 待实现具体request请求逻辑...
    /**
      // axios example
      axios(requestConfig).then((res) => {
        resolve(res as unknown as ResponseData);
      }).catch(reject);
    */
    // 先用异步模拟request请求逻辑
    setTimeout(() => {
      resolve({} as unknown as ResponseData);
    }, 1500);
  });
}
