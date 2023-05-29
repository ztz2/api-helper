import { APIHelper } from '@api-helper/core/es/lib/types';
import { aes } from '@/utils/crypto';
import request from '@/utils/request';
import { SECRET_KEY } from '@/constants';
import { IProject } from '@/store/project/interface';

export async function getSwaggerDocs(data: IProject): Promise<Array<APIHelper.Document>> {
  if (data?.auth?.password) {
    data.auth.password = aes.encrypt(data.auth.password, SECRET_KEY);
  }
  return (await request('/app/swagger/docs', {
    method: 'post',
    data,
  })) as unknown as Array<APIHelper.Document>;
}
