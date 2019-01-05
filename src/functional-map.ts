export default class FMap<K, V> extends Map<K, V> {
    constructor(entries?: ReadonlyArray<[K, V]> | undefined) {
        super(entries)
    }

    map<T>(fn: (value: V, key: K) => T): FMap<K, T> {
        const nMap = new FMap<K, T>()
        for (let [k, v] of this) {
            nMap.set(k, fn(v, k))
        }
        return nMap
    }
}
