const Itinerary = require('../src/itinerary');

describe('Itinerary', () => {
  it('Creates an Itinerary object', () => {
    const itinerary = new Itinerary();

    expect(itinerary).toBeInstanceOf(Object);
  });

  it('Has a ports property', () => {
    const itinerary = jest.fn();

    expect(itinerary.ports).toEqual();
  });
});
