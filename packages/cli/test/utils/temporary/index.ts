import { join } from 'path';
import {
  remove,
  writeFile,
  ensureFile,
} from 'fs-extra';
import { toUnixPath } from '../../../src/lib/utils/util';

export async function temporaryFile(content: string = '', config?: { extension?: string }) {
  config = config ? config: {};
  const folderName = '__folder__';
  const extension = config.extension ?? '';
  const fileName = String(Math.random()).slice(2) + extension;
  const path = join(__dirname, '../../', folderName);
  const fullPath = join(path, fileName);
  await ensureFile(fullPath);
  await writeFile(fullPath, content);
  return {
    path: toUnixPath(path),
    fullPath: toUnixPath(fullPath),
    fileName,
    clear: async () => await remove(toUnixPath(fullPath))
  };
}
