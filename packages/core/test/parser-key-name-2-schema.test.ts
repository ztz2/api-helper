import ParserKeyName2Schema from '../src/lib/parser/parser-key-name-2-schema';

describe('parser-key-name-2-schema', () => {
  test('.searchValue', async () => {
    const schema = new ParserKeyName2Schema('.searchValue', 'number').parse();
    expect(schema).toMatchSnapshot('.searchValue');
  });
  test('dept.searchValue', async () => {
    const schema = new ParserKeyName2Schema('dept.searchValue', 'number').parse();
    expect(schema).toMatchSnapshot('dept.searchValue');
  });
  test('dept.searchValue.username', async () => {
    const schema = new ParserKeyName2Schema('dept.searchValue.username', 'string').parse();
    expect(schema).toMatchSnapshot('dept.searchValue.username');
  });
  test('roles[0].params', async () => {
    const schema = new ParserKeyName2Schema('roles[0].params', 'boolean').parse();
    expect(schema).toMatchSnapshot('roles[0].params');
  });
  test('roles[0].params.updateBy', async () => {
    const schema = new ParserKeyName2Schema('roles[0].params.updateBy', 'unknown').parse();
    expect(schema).toMatchSnapshot('roles[0].params.updateBy');
  });
  test('[0].params.updateBy[0].time', async () => {
    const schema = new ParserKeyName2Schema('[0].params.updateBy[0].time', 'null').parse();
    expect(schema).toMatchSnapshot('[0].params.updateBy[0].time');
  });
});
