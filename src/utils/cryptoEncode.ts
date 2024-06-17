import * as crypto from "crypto";
require("dotenv");

class CryptoEncode {
  private static algorithm = process.env.CRYPTO_ALGORITHM;
  private static key = crypto.scryptSync(process.env.CRYPTO_KEY, "salt", 32);
  private static ivLength = 16;

  static encode(payload: Record<string, any>): string {
    try {
      const jsonString = JSON.stringify(payload);
      const iv = crypto.randomBytes(this.ivLength);
      const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);

      let encrypted = cipher.update(jsonString, "utf-8", "hex");
      encrypted += cipher.final("hex");

      return encrypted + ":" + iv.toString("hex");
    } catch (error) {
      throw new Error("Failed to encode and encrypt object");
    }
  }

  static decode(encryptedString: string): Record<string, any> {
    try {
      const [encrypted, ivHex] = encryptedString.split(":");
      const iv = Buffer.from(ivHex, "hex");
      const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv);
      let decrypted = decipher.update(encrypted, "hex", "utf8");
      decrypted += decipher.final("utf8");
      return JSON.parse(decrypted);
    } catch (error) {
      throw new Error("Failed to decrypt and decode string");
    }
  }
}

export default CryptoEncode;
