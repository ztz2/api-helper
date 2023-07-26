import * as os from 'os';
import * as requestIp from 'request-ip';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ClientIP = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    if (req.clientIp) return req.clientIp;
    return requestIp.getClientIp(req);
  },
);

export function getLocalIPV4List(): Array<string> {
  const networkInterfaces = os.networkInterfaces() ?? {};
  const set = new Set();
  for (const [, list] of Object.entries(networkInterfaces)) {
    for (const itm of list) {
      set.add(itm.address);
    }
  }
  return Array.from(set) as Array<string>;
}
