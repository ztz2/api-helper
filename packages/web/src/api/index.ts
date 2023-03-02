import { aes } from '@/utils/crypto';
import request from '@/utils/request';
import { SECRET_KEY } from '@/constants';
import { IProject } from '@/store/project/interface';

export const getSwaggerDocs = (data: IProject) => {
  if (data.password) {
    data.password = aes.encrypt(data.password, SECRET_KEY);
  }
  return request('/app/swagger/docs', {
    method: 'post',
    data,
  });
};
