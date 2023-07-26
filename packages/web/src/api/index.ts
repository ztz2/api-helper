import { APIHelper } from '@api-helper/core/es/lib/types';

import request from '@/api/request';
import { aes } from '@/utils/crypto';
import { SECRET_KEY } from '@/constants';
import { DocumentConfig } from '@/store/document-config/interface';

export function getDocs(data: DocumentConfig): Promise<Array<APIHelper.Document>> {
  if (data?.auth?.password) {
    data.auth.password = aes.encrypt(data.auth.password, SECRET_KEY);
  }
  return request<unknown, Array<APIHelper.Document>>('/app/docs', {
    method: 'post',
    data,
  });
}

export function exportFileApi(data: DocumentConfig): Promise<Array<APIHelper.Document>> {
  return request<unknown, Array<APIHelper.Document>>('/app/fileDirectory', {
    data,
    method: 'post',
    responseType: 'blob',
    // @ts-ignore
    download: true,
  });
}
