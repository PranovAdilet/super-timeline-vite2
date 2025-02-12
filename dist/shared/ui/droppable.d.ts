import React from "react";
interface DroppableAreaProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onDragStateChange?: (isDragging: boolean) => void;
    id?: string;
}
export declare const DroppableArea: React.FC<DroppableAreaProps>;
export {};
//# sourceMappingURL=droppable.d.ts.map