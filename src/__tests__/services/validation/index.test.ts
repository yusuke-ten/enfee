import { validationEmail, validationPassword } from 'services/validation';

describe('validation', () => {
  describe('#validationEmail', () => {
    test('空文字の場合エラーメッセージを返すこと', () => {
      expect(validationEmail('')).toEqual('無効なメールアドレスです');
    });

    test('@がない場合エラーメッセージを返すこと', () => {
      expect(validationEmail('example.com')).toEqual(
        '無効なメールアドレスです',
      );
    });
  });

  describe('#validationPassword', () => {
    test('空文字の場合エラーメッセージを返すこと', () => {
      expect(validationPassword('')).toEqual('入力必須項目です');
    });
    test('全角文字列の場合エラーメッセージを返すこと', () => {
      expect(validationPassword('ほげほげほげほげ')).toEqual(
        '英数字で入力してください',
      );
    });
    test('6文字未満の場合エラーメッセージを返すこと', () => {
      expect(validationPassword('eg34')).toEqual('6文字以上で入力してください');
    });
  });
});

export {};
