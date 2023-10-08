/**
 * ユーザー名の検証
 * @param username
 */
export default function isValidDisplayname(username: string) {
  return username.length >= 1 && username.length <= 50;
}
