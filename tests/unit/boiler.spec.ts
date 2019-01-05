declare var global: any
import Map from '../../src/functional-map'

describe('Boilerplate', () => {
    test('it extends map', () => {
        const boiler = new Map([[1, 2], [2, 1]])
        expect(boiler.test(1)).toBe(2)
        expect(boiler.test(2)).toBe(1)
    })
})
