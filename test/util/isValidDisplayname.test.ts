import isValidDisplayname from '@/util/isValidDisplayname';

describe('isValidDisplayname', () => {
  it('有効な表示名の場合はtrueを返す', () => {
    expect(isValidDisplayname('ククルス')).toBe(true);
    expect(isValidDisplayname('Hello, World!')).toBe(true);
    expect(isValidDisplayname('あ'.repeat(50))).toBe(true);
    expect(isValidDisplayname('A'.repeat(50))).toBe(true);
  });

  it('空白には出来ません', () => {
    expect(isValidDisplayname('')).toBe(false);
  });

  it('50文字を超えるユーザー名の場合はfalseを返す', () => {
    expect(isValidDisplayname('A'.repeat(51))).toBe(false);
    expect(isValidDisplayname('あ'.repeat(51))).toBe(false);
  });
});
