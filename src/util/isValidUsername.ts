/**
 * ユーザー名の検証
 * @param username
 */
export default function isValidUsername(username: string) {
  const pattern = /^[A-Za-z0-9_]{3,15}$/;
  return pattern.test(username);
}
