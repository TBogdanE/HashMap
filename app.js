class HashMap {
  constructor() {
    this.arr = new Array(50).fill(null);
  }

  check(value) {
    if (value < 0 || value >= this.arr.length) {
      throw new Error(`Trying to access index ${value}, which is out of bound`);
    }
  }

  hash(string) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < string.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    hashCode = hashCode % this.arr.length;
    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    this.arr[hashCode] = value;
    console.log(
      `Hashcode: ${hashCode}; \n arr[hashcode]: ${this.arr[hashCode]}`
    );
  }

  get(key) {
    this.check(key);

    if (!this.arr[key]) return null;

    return this.arr[key];
  }

  has(key) {
    if (!this.arr[key]) return false;

    return true;
  }

  remove(key) {
    if (!this.arr[key]) return false;

    this.arr.splice(key, 1);
    return true;
  }

  length() {
    let counter = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] !== null) {
        counter += 1;
      }
    }
    return counter;
  }
}

const hashMap = new HashMap();
hashMap.set("name", "Bogdan");
hashMap.set("namei", "Salut");
//console.log(hashMap.get(2131));
console.log(hashMap.get(40));
console.log(hashMap.get(22));
console.log(hashMap.has(2131));
console.log(hashMap.has(22));
hashMap.remove(7);
console.log(hashMap.length());
console.log(hashMap.arr);
