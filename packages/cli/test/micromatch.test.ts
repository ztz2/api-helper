import micromatch from 'micromatch';

describe('micromatch', () => {
  test('Same path', async () => {
    expect(micromatch.isMatch('/v1/api/login', '/v1/api/login')).toEqual(true);
  });
  test('Path param', async () => {
    expect(micromatch.isMatch('/v1/api/{param}/login', '/v1/api/{param}/login')).toEqual(true);
  });
  test('Glob matching', async () => {
    expect(micromatch.isMatch('/v1/api/{param}/login', '/v1/*/{param}/*')).toEqual(true);
  });
  test('Matching http methods', async () => {
    expect(micromatch.isMatch('get', '*')).toEqual(true);
    expect(micromatch.isMatch('get', '(get|post)')).toEqual(true);
  });
});
