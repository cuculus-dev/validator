import isEmail from 'validator/lib/isEmail';

export default function isValidEmail(mail: string) {
  // 150文字制限
  if (mail.length > 150) {
    return false;
  }
  return isEmail(mail);
}
