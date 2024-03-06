export class CraftingSystem {
  private currentItem: { name: string; affixes: string[] } | null = null;

  setItem(item: { name: string; affixes: string[] }) {
    this.currentItem = item;
    console.log(`CraftingSystem is now working with ${item.name}`);
  }

  clearItem() {
    this.currentItem = null;
  }

  removeAffix(rune: string) {
    if (!this.currentItem || this.currentItem.affixes.length === 0) {
      throw new Error("No item or no affixes to remove");
    }

    console.log(`Removing affix from ${this.currentItem.name} using ${rune}`);
    const index = Math.floor(Math.random() * this.currentItem.affixes.length);
    this.currentItem.affixes.splice(index, 1);

    return this.currentItem;
  }
}
