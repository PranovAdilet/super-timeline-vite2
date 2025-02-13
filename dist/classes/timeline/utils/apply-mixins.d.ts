import { Constructor } from "fabric";
/**
 * Применяет миксины к целевому классу.
 *
 * @template T - Тип целевого класса.
 * @template S - Типы миксинов.
 * @param derivedCtor - Целевой класс, к которому применяются миксины.
 * @param constructors - Массив классов-миксинов.
 */
export declare function applyMixins<T extends Constructor>(derivedCtor: T, constructors: Constructor[]): void;
//# sourceMappingURL=apply-mixins.d.ts.map