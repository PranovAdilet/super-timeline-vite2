import { Constructor } from "fabric";

/**
 * Применяет миксины к целевому классу.
 *
 * @template T - Тип целевого класса.
 * @template S - Типы миксинов.
 * @param derivedCtor - Целевой класс, к которому применяются миксины.
 * @param constructors - Массив классов-миксинов.
 */
export function applyMixins<T extends Constructor>(
  derivedCtor: T,
  constructors: Constructor[]
): void {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      if (name !== "constructor") {
        const descriptor = Object.getOwnPropertyDescriptor(
          baseCtor.prototype,
          name
        );
        if (descriptor) {
          Object.defineProperty(derivedCtor.prototype, name, descriptor);
        }
      }
    });
  });
}
