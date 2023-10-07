import isValidUsername from '@/util/isValidUsername';

describe('isValidUsername', () => {
  it('有効なユーザー名の場合はtrueを返す', () => {
    expect(isValidUsername('cuculus123')).toBe(true);
    expect(isValidUsername('cuculus_name')).toBe(true);
    expect(isValidUsername('Cuculus1')).toBe(true);
  });

  it('3文字未満のユーザー名の場合はfalseを返す', () => {
    expect(isValidUsername('us')).toBe(false);
  });

  it('15文字を超えるユーザー名の場合はfalseを返す', () => {
    expect(isValidUsername('thisIsAReallyLongUsername')).toBe(false);
  });

  it('無効な文字を含むユーザー名の場合はfalseを返す', () => {
    expect(isValidUsername('cuculus@123')).toBe(false);
    expect(isValidUsername('cuculus-name')).toBe(false);
    expect(isValidUsername('cuculus!')).toBe(false);
    expect(isValidUsername('cuculus.me')).toBe(false);
  });
});
