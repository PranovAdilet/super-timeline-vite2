declare class UnionFind {
    parent: number[];
    rank: number[];
    constructor(size: number);
    find(x: number): number;
    union(x: number, y: number): void;
}
export default UnionFind;
//# sourceMappingURL=union-find.d.ts.map