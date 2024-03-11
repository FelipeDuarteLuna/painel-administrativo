import { QuantityDescriptionPipe } from './quantity-description.pipe';

describe('QuantityDescriptionPipe', () => {
  xit('create an instance', () => {
    const pipe = new QuantityDescriptionPipe();
    expect(pipe).toBeTruthy();
  });

  xit('should return unavailable Product text', () => {
    const pipe = new QuantityDescriptionPipe();
    const description = pipe.transform(0);
    expect(description).toBe('Produto indisponível');
  });

  xit('Shoulder return text from only one Product', () => {
    const pipe = new QuantityDescriptionPipe();
    const description = pipe.transform(1);
    expect(description).toBe(
      'Último produto em estoque. Corra antes que esgote!'
    );
  });

  xit('Shoulder return text from only one Product', () => {
    const pipe = new QuantityDescriptionPipe();
    const description = pipe.transform(4);
    expect(description).toBe('4 disponíveis');
  });
});
