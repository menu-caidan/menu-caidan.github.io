import CryptoJS from 'crypto-js';

function decryptAES(encryptedMessage, key) {
    // Convert the key and IV to WordArrays
    const keyBytes = CryptoJS.enc.Utf8.parse(key);

    // Convert the base64-encoded encrypted message to a WordArray
    const ciphertext = CryptoJS.enc.Base64.parse(encryptedMessage);

    // Decrypt the message using AES-CBC
    const decrypted = CryptoJS.AES.decrypt({ ciphertext }, keyBytes, {
        mode: CryptoJS.mode.ECB,
    });

    // Convert the decrypted message to plaintext
    return decrypted.toString(CryptoJS.enc.Utf8);
}

export default decryptAES;