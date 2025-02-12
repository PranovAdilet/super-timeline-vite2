export type BinarySearchPredicate<T> = (value: T, index: number, arr: T[]) => boolean;
/**
 * Searches for a value by predicate function.
 * @param arr The list of any values.
 * @param predicate Predicate function.
 * @returns Found index or -1.
 */
export declare function findIndex<T>(arr: T[], predicate: BinarySearchPredicate<T>): number;
//# sourceMappingURL=search.d.ts.map