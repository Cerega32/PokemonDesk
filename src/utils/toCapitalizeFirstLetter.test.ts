import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна принимать строку "pickachu" и возвращать строку "Pickachu"', () => {
    const str = toCapitalizeFirstLetter('pickachu');

    expect(str).toEqual('Pickachu');
  });

  test('Должна принимать строку пустую строку и возвращать пустую строку', () => {
    const str = toCapitalizeFirstLetter('');

    expect(str).toEqual('');
  });
});
