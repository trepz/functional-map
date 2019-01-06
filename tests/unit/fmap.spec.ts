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

describe('Map.filter', () => {
    let fmap: Map<number, number>
    beforeEach(
        () => (fmap = new Map([[1, 2], [2, 1], [3, 7], [4, 15], [5, 3], [6, 20], [7, 1], [8, 2], [9, 9], [10, 11]])),
    )

    test('it filters values correctly', () => {
        let nmap = fmap.filter(x => x > 10)
        expect(nmap.size).toBe(3)
        expect(nmap.get(4)).toBe(15)
        expect(nmap.get(2)).toBeUndefined()

        nmap = fmap.filter(x => false)
        expect(nmap.size).toBe(0)
    })

    test('keys work correctly', () => {
        const nmap = fmap.filter((v, k) => k < 6)
        expect(nmap.size).toBe(5)
    })
})

describe('Chaining methods', () => {
    it('should have no type errors chaining filters and maps that transform types', () => {
        const chainMap = new Map([[1, 10], [2, 20]])
            .map(v => v.toString())
            .filter(v => v === '20')
            .map(v => v + ' value')

        expect(chainMap.get(2)).toBe('20 value')
        expect(chainMap.size).toBe(1)
    })
})
