'use strict'
const cents = 5

const roundAccurately = (number, decimalPlaces) => Number(`${Math.round(`${number}e${decimalPlaces}`)}e-${decimalPlaces}`);

const roundTo5Cents = (value) => {

    if (!isFinite(value)) throw new Error('Not supported value')

    value = roundAccurately(value, 2)

    const division = parseInt(value.toFixed(2).split('.')[1])%cents

    if (division !== 0) {
        if (value > 0) {
        value = division >= Math.round(cents / 2) ? (value + ((cents - division) / 100)) : (value - division/100)
        } else {
            value = division >= Math.round(cents / 2) ? (value - ((cents - division) / 100)) : (value + division/100)
        }
    }

    if (isNaN(value)) throw new Error('Not supported value')

    return parseFloat(value.toFixed(2))
}

module.exports = roundTo5Cents
