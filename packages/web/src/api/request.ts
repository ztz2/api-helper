import axios from 'axios';
import { REQUEST_TIMEOUT } from '@api-helper/core/lib/constant';

import message from '@/utils/message';

const request = axios.create({
  timeout: REQUEST_TIMEOUT,
});

request.interceptors.response.use(
  async (response) => {
    const { config, headers } = response;
    let { data } = response;
    if (data instanceof Blob) {
      let blob: Blob | Recordable = data;
      try {
        blob = JSON.parse(await data.text()) as unknown as Recordable;
        if ('code' in blob && 'message' in blob && 'data' in blob && !(blob.code === 200 || blob.code === 1000)) {
          message.error(blob.message);
          return Promise.reject(blob.message);
        }
        return blob;
      } catch {}
      if ('download' in config) {
        downloadBlob(blob as Blob, headers['content-disposition'] as string);
      }
      return blob;
    }
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch {}
    }
    if (data.code === 200 || data.code === 1000) {
      return data.data;
    }
    message.error(data.message);
    return Promise.reject(data.message);
  },
  (error) => {
    message.error('服务异常');
    return Promise.reject(error);
  },
);

function downloadBlob(blob: Blob, filename: string) {
  if (!filename || !blob) {
    return;
  }
  if (filename.includes('attachment;')) {
    const attachment = /attachment;.*filename=(.*)($|;)/.exec(filename)?.[1];
    if (attachment) {
      filename = attachment;
    }
  }
  const link = document.createElement('a');
  link.download = decodeURIComponent(filename);
  link.href = URL.createObjectURL(blob);
  link.click();
}

export default request;
