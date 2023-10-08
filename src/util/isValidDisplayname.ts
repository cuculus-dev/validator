/**
 * ユーザー名の検証
 * @param displayName
 */
export default function isValidDisplayname(displayName: string) {
  return displayName.length >= 1 && displayName.length <= 50;
}
