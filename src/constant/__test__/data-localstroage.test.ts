import { DATA_CONTACT_LIST, DATA_IMG_USER } from '../data-localstroage';

describe('test data-localstroage file', () => {
  it('should return value contactList', () => {
    expect(DATA_CONTACT_LIST).toBe('contactList');
  });

  it('should return value img', () => {
    expect(DATA_IMG_USER).toBe('img');
  });
});
