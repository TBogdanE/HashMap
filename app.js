class HashMap {
  constructor() {
    this.arr = new Array(50).fill(null);
  }

  hash(value) {
    const hashCode = this.createHash(value);
    this.arr[hashCode] = value;
  }

  createHash(string) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < string.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }
    return hashCode;
  }
}

const hashMap = new HashMap();
hashMap.hash("Bogdan");
console.log(hashMap.arr.length);
