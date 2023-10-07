import isEmail from 'validator/lib/isEmail';

/**
 * メールアドレスの検証
 * @param mail
 */
export default function isValidEmail(mail: string) {
  // 150文字制限
  if (mail.length > 150) {
    return false;
  }
  return isEmail(mail);
}
