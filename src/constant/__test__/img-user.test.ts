import { IMG_PATH } from '../img-user';

describe('test img-user file', () => {
  it('should have 5 key', () => {
    const mockKey = ['BLANK', 'BOY', 'WOMAN', 'BS_MAN', 'OLD_MAN'];

    const getImgPath = Object.entries(IMG_PATH).map((item) => item[0]);

    mockKey.forEach((_, index) => {
      expect(mockKey[index]).toBe(getImgPath[index]);
    });
  });
});
