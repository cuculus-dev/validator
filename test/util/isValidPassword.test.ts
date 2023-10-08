import isValidPassword from '@/util/isValidPassword';

describe('isValidPassword', () => {
  it('6文字以上の半角文字のパスワードは有効', () => {
    expect(isValidPassword('abcdef')).toBe(true);
    expect(isValidPassword('a1b2c3')).toBe(true);
    expect(isValidPassword('!@#abc')).toBe(true);
  });

  it('128文字以下の半角文字のパスワードは有効', () => {
    const password128 = 'a'.repeat(128);
    expect(isValidPassword(password128)).toBe(true);
  });

  it('5文字以下のパスワードは無効', () => {
    expect(isValidPassword('')).toBe(false);
    expect(isValidPassword('abcd5')).toBe(false);
  });

  it('129文字以上のパスワードは無効', () => {
    const password129 = 'a'.repeat(129);
    expect(isValidPassword(password129)).toBe(false);
  });

  it('全角文字を含むパスワードは無効', () => {
    expect(isValidPassword('abcdefＡ')).toBe(false);
    expect(isValidPassword('＠abcde')).toBe(false);
  });
});
