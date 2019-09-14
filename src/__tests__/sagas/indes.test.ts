import { testSaga } from 'src/sagas/app';

console.log(testSaga());

describe('SayHello', () => {
  test('example', () => {
    expect('hello').toBe('hello');
  });
});

export {};
