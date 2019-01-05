export default class FMap<K, V> extends Map<K, V> {
    constructor(entries?: ReadonlyArray<[K, V]> | undefined) {
        super(entries)
    }

    test(k: K): V | undefined {
        return this.get(k)
    }
}
