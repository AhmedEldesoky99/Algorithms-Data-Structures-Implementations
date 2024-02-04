//separate chaining
class HashTable {
  public arr: any[];
  constructor(size = 53) {
    this.arr = new Array(size);
  }

  private hash(key: string) {
    let total = 0;
    let primeNumber = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key.charCodeAt(i);
      total = (total * primeNumber + value) % this.arr.length;
    }
    return total;
  }

  set(key: string, value: string) {
    const index = this.hash(key);
    if (!this.arr[index]) {
      this.arr[index] = [];
    }
    this.arr[index].push([key, value]);
  }

  get(key: string) {
    const index = this.hash(key);
    const foundedItem: any[] = this.arr[index];

    if (foundedItem) {
      for (let i = 0; i < foundedItem.length; i++) {
        if (foundedItem[i][0] === key) return foundedItem[i][1];
      }
    }

    return undefined;
  }

  private mapHelper(index: number, unique: boolean = false): string[] {
    let result: string[] = [];
    this.arr.map((item: [key: string, value: string]) => {
      if (item) {
        for (let i = 0; i < item.length; i++) {
          if (unique && result.includes(item[i][index])) return;

          result.push(item[i][index]);
        }
      }
    });
    return result;
  }
  delete(key: string, value: string): boolean {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i]) {
        for (let j = 0; j < this.arr[i].length; j++) {
          if (this.arr[i][j][0] === key && this.arr[i][j][1] === value) {
            this.arr[i].splice(j, 1);
            return true;
          }
        }
      }
    }

    return false;
  }
  keys(): string[] {
    return this.mapHelper(0, true);
  }
  values(): string[] {
    return this.mapHelper(1, false);
  }
}

const hashTable = new HashTable(7);

hashTable.set("Education1", "FCI");
hashTable.set("Education2", "ITI");

hashTable.set("Experience1", "Easymedia");
hashTable.set("Experience1", "x");

hashTable.set("Experience2", "IDSC");
hashTable.set("Experience3", "Arabia IT");

console.log(hashTable.get("Experience2"));

console.log(hashTable.delete("Experience2", "IDSC"));

console.log(hashTable.keys());
console.log(hashTable.values());
