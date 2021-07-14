const roundTo5Cents = require('./index');

test('round 22.22 to 5 Cents should be 22.20', () => {
    expect(roundTo5Cents(22.22)).toBe(22.20);
});

test('round 22.23 to 5 Cents should be 22.25', () => {
    expect(roundTo5Cents(22.23)).toBe(22.25);
});

test('round 22.25 to 5 Cents should be 22.25', () => {
    expect(roundTo5Cents(22.25, 5)).toBe(22.25);
});

test('round 22.27 to 5 Cents should be 22.25', () => {
    expect(roundTo5Cents(22.27)).toBe(22.25);
});

test('round 22.28 to 5 Cents should be 22.30', () => {
    expect(roundTo5Cents(22.28)).toBe(22.30);
});

test('round 300 to 5 Cents should be 300.00', () => {
    expect(roundTo5Cents(300)).toBe(300.00);
});

test('round 2.255 to 5 Cents should be 2.25', () => {
    expect(roundTo5Cents(2.255)).toBe(2.25);
});

test('round 2.275 to 5 Cents should be 2.30', () => {
    expect(roundTo5Cents(2.275)).toBe(2.30);
});

test('round -7.36 to 5 Cents should be -7.35', () => {
    expect(roundTo5Cents(-7.36)).toBe(-7.35);
});

test('round -7.32 to 5 Cents should be -7.30', () => {
    expect(roundTo5Cents(-7.32)).toBe(-7.30);
});

test('round 33000000000000000000000 to 5 Cents should throw Error "Not supported value"', () => {
    expect(() => {
        roundTo5Cents(33000000000000000000000);
    }).toThrow('Not supported value');
});
