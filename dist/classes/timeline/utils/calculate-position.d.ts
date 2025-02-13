type Position = {
    top: string;
    left: string;
    transform: string;
};
export declare const calculatePosition: (options: {
    origin?: number;
    size: {
        width: number;
        height: number;
    };
}, element: {
    width: number;
    height: number;
}) => Position;
export {};
//# sourceMappingURL=calculate-position.d.ts.map