import { AES, enc } from 'crypto-js';

export const aes = {
  encrypt(text: string = '', secretPassphrase: string = '') {
    return AES.encrypt(text, secretPassphrase).toString();
  },
  decrypt(encryptedText: string = '', secretPassphrase: string = '') {
    return AES.decrypt(encryptedText, secretPassphrase).toString(enc.Utf8);
  }
};
