export class Result<T> {
  data: T|null = null;
  code = 200;
  message = 'ok';
  static success<T>(data: T) {
    const result = new Result();
    result.data = data;
    return result;
  }

  static fail(message: string, code = 500) {
    const result = new Result();
    result.code = code;
    result.message = message;
    return result;
  }
}
