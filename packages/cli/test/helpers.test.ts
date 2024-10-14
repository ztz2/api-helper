import * as lodash from 'lodash';
import { processRequestFunctionConfig } from '../src/lib/helpers';

const mockData = {
  name: 'ztz2.png',
  remarks: 'remark content!',
  id: 'ad54521sdf5421erf52102',
  size: 1024,
  type: 'image/png',
};

describe('processRequestFunctionConfig', () => {
  test('normal', async () => {
    const res = processRequestFunctionConfig(mockData, null, {
      path: '/ossFile/delete',
      method: 'POST',
      requestContentType: ['application/x-www-form-urlencoded'],
      formDataKeyNameList: [],
      pathParamKeyNameList: [],
      queryStringKeyNameList: [],
    });
    expect(res.data).toEqual('name=ztz2.png&remarks=remark%20content%21&id=ad54521sdf5421erf52102&size=1024&type=image%2Fpng');
  });
  test('has path param', async () => {
    const res = processRequestFunctionConfig(mockData, null, {
      path: '/ossFile/delete/{id}',
      method: 'POST',
      requestContentType: ['application/x-www-form-urlencoded'],
      formDataKeyNameList: [],
      pathParamKeyNameList: ['id'],
      queryStringKeyNameList: [],
    });
    expect(lodash.pick(res, ['data', 'path'])).toEqual({
      path: '/ossFile/delete/ad54521sdf5421erf52102',
      data: 'name=ztz2.png&remarks=remark%20content%21&size=1024&type=image%2Fpng',
    });
  });
  test('has query param', async () => {
    const res = processRequestFunctionConfig(mockData, null, {
      path: '/ossFile/delete',
      method: 'POST',
      requestContentType: ['application/x-www-form-urlencoded'],
      formDataKeyNameList: [],
      pathParamKeyNameList: [],
      queryStringKeyNameList: ['id', 'name'],
    });
    expect(lodash.pick(res, ['data', 'path'])).toEqual({
      path: '/ossFile/delete?name=ztz2.png&id=ad54521sdf5421erf52102',
      data: 'remarks=remark%20content%21&size=1024&type=image%2Fpng',
    });
  });
  test('has query param and get method', async () => {
    const res = processRequestFunctionConfig(mockData, null, {
      path: '/ossFile/delete',
      method: 'GET',
      requestContentType: ['application/x-www-form-urlencoded'],
      formDataKeyNameList: [],
      pathParamKeyNameList: [],
      queryStringKeyNameList: ['id', 'name'],
    });
    expect(lodash.pick(res, ['data', 'path'])).toEqual({
      path: '/ossFile/delete?name=ztz2.png&id=ad54521sdf5421erf52102&remarks=remark%20content%21&size=1024&type=image%2Fpng',
      data: undefined,
    });
  });
  test('http get method', async () => {
    const res = processRequestFunctionConfig(mockData, null, {
      path: '/ossFile/delete',
      method: 'GET',
      requestContentType: ['application/x-www-form-urlencoded'],
      formDataKeyNameList: [],
      pathParamKeyNameList: [''],
      queryStringKeyNameList: [],
    });
    expect(lodash.pick(res, ['data', 'path'])).toEqual({
      path: '/ossFile/delete?name=ztz2.png&remarks=remark%20content%21&id=ad54521sdf5421erf52102&size=1024&type=image%2Fpng',
      data: undefined,
    });
  });
});
