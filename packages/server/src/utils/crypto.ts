import { AES, enc } from 'crypto-js';

export const aes = {
  encrypt(text = '', secretPassphrase = '') {
    return AES.encrypt(text, secretPassphrase).toString();
  },
  decrypt(encryptedText = '', secretPassphrase = '') {
    return AES.decrypt(encryptedText, secretPassphrase).toString(enc.Utf8);
  },
};
