import consola from 'consola';
import { readJson } from 'fs-extra';

export async function readJsonFile(filename: string) {
  try {
    return await readJson(filename);
  } catch (e) {
    const errorText = `Unable to read file "${filename}"`;
    consola.error(errorText);
    throw new ReferenceError(errorText);
  }
}
