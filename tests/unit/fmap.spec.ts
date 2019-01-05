declare var global: any
import Map from '../../src/functional-map'

describe('Map.map', () => {
    test('it can map over a maps values', () => {
        const fmap = new Map([[1, 2], [2, 1]]).map(x => x * 10)
        expect(fmap.get(1)).toBe(20)
        expect(fmap.get(2)).toBe(10)
    })

    test('it does not mutate the original object', () => {
        const fmap = new Map([[1, 2], [2, 1]])
        const nmap = fmap.map(x => 5)
        expect(fmap.get(1)).toBe(2)
        expect(fmap.get(2)).toBe(1)
        expect(nmap.get(1)).toBe(5)
        expect(nmap.get(2)).toBe(5)
    })

    test('it can map into a different type', () => {
        const fmap = new Map([[1, 2]]).map(x => ({ hello: 'there' }))
        expect(fmap.get(1)).toEqual({ hello: 'there' })
    })
})
