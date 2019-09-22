import { testSaga } from 'src/modules/sagas/app';

console.log(testSaga());

describe('SayHello', () => {
  test('example', () => {
    expect('hello').toBe('hello');
  });
});

export {};
