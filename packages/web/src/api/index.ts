import { APIHelper } from '@api-helper/core/es/lib/types';
import { aes } from '@/utils/crypto';
import request from '@/utils/request';
import { SECRET_KEY } from '@/constants';
import { IProject } from '@/store/project/interface';

export async function getDocs(data: IProject): Promise<Array<APIHelper.Document>> {
  if (data?.auth?.password) {
    data.auth.password = aes.encrypt(data.auth.password, SECRET_KEY);
  }
  return (await request('/app/docs', {
    method: 'post',
    data,
  })) as unknown as Array<APIHelper.Document>;
}
