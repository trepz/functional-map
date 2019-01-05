export default class FMap<K, V> extends Map<K, V> {
    constructor(entries?: ReadonlyArray<[K, V]> | undefined) {
        super(entries)
    }

    map<T>(fn: (value: V, key: K, map: FMap<K, V>) => T, thisArg?: any): FMap<K, T> {
        const nMap = new FMap<K, T>()
        if (thisArg) fn = fn.bind(thisArg)

        for (let [k, v] of this) {
            nMap.set(k, fn(v, k, this))
        }
        return nMap
    }
}
