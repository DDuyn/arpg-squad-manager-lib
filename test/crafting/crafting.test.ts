import { CraftingSystem } from "@crafting/crafting-system";

describe("Crafting Module", () => {
  test("removeAffix should remove a random affix from an item", () => {
    // Configura tus datos de prueba
    const item = {
      name: "Test Item",
      affixes: ["Affix 1", "Affix 2", "Affix 3"],
    };
    const rune: string = "Rune of Removal";

    // Crea una instancia de CraftingSystem
    const craftingSystem = new CraftingSystem();
    craftingSystem.setItem(item);
    // Guarda la longitud original del array de afijos
    const originalAffixCount = item.affixes.length;

    // Ejecuta la función que estás probando
    const result = craftingSystem.removeAffix(rune);

    // Verifica que se ha eliminado un afijo
    expect(result.affixes.length).toBe(originalAffixCount - 1);
  });

  test("removeAffix should throw an error if no item is set", () => {
    // Configura tus datos de prueba
    const rune: string = "Rune of Removal";

    // Crea una instancia de CraftingSystem
    const craftingSystem = new CraftingSystem();

    // Ejecuta la función que estás probando
    const removeAffix = () => craftingSystem.removeAffix(rune);

    // Verifica que se ha lanzado un error
    expect(removeAffix).toThrow("No item or no affixes to remove");
  });

  test("clearItem should remove the current item", () => {
    // Configura tus datos de prueba
    const item = {
      name: "Test Item",
      affixes: ["Affix 1", "Affix 2", "Affix 3"],
    };

    // Crea una instancia de CraftingSystem
    const craftingSystem = new CraftingSystem();
    craftingSystem.setItem(item);

    // Ejecuta la función que estás probando
    craftingSystem.clearItem();

    // Verifica que el item ha sido eliminado
    expect(craftingSystem["currentItem"]).toBe(null);
  });

  test("setItem should set the current item", () => {
    // Configura tus datos de prueba
    const item = {
      name: "Test Item",
      affixes: ["Affix 1", "Affix 2", "Affix 3"],
    };

    // Crea una instancia de CraftingSystem
    const craftingSystem = new CraftingSystem();

    // Ejecuta la función que estás probando
    craftingSystem.setItem(item);

    // Verifica que el item ha sido establecido
    expect(craftingSystem["currentItem"]).toBe(item);
  });
});
