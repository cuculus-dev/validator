/**
 * パスワードの検証
 * @param password
 */
export default function isValidPassword(password: string) {
  // 半角文字のみ許可
  const pattern = /^[\x20-\x7E]{6,128}$/;
  return pattern.test(password);
}
