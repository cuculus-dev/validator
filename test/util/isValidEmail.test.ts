import isValidEmail from '@/util/isValidEmail';

describe('isValidEmail', () => {
  it('150文字以下', () => {
    expect(isValidEmail('cuculus@example.com')).toBe(true);
  });

  it('150文字以上', () => {
    let prefix = '';
    for (let i = 0; i < 150; i++) {
      prefix += 'A';
    }
    expect(isValidEmail(`@example.com`)).toBe(false);
  });

  it('エイリアスが使用可能', () => {
    expect(isValidEmail(`cuculus+test@example.com`)).toBe(true);
  });

  it('メールアドレスではない', () => {
    expect(isValidEmail(`example.com`)).toBe(false);
  });
});
