import { APIHelper } from '@api-helper/core/es/lib/types';
import { FormatCodeConfig } from '@api-helper/cli/lib/tools/format-code';

import { aes } from '@/utils/crypto';
import request from '@/api/request';
import { SECRET_KEY } from '@/constants';
import { Project } from '@/store/project/interface';

export function getDocs(data: Project): Promise<Array<APIHelper.Document>> {
  if (data?.auth?.password) {
    data.auth.password = aes.encrypt(data.auth.password, SECRET_KEY);
  }
  return request<unknown, Array<APIHelper.Document>>('/app/docs', {
    method: 'post',
    data,
  });
}
