const { getPercents } = require('./index');

describe('function getPercents', () => {
    test('should return a percentage of the number', () => {
        expect(getPercents(30, 200)).toBe(60)
    })

    test('should throw an exception if non-numbers are entered', () => {
        expect(() => getPercents('qwe', 200)).toThrow('incorrect data');
        expect(() => getPercents(30, 'qwe')).toThrow('incorrect data');
    })

    test('should throw an exception if percent < 0', () => {
        expect(() => getPercents(-10, 200)).toThrow('percent cannot be less than');
    })
})
