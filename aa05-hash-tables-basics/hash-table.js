const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null); 
  }

  hash(key) {
    let result = sha256(key).slice(0,8); 
    return parseInt(result, 16);
    
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    const index = this.hashMod(key);
    if(this.data[index]) {
      throw new Error('hash collision or same key/value pair already exists!');
    }
    else{
      const newPair = new KeyValuePair(key, value);
      this.data[index] = newPair;
      this.count++;
    }
  }

  insertWithHashCollisions(key, value) {
    const newPair = new KeyValuePair(key, value);
    const index = this.hashMod(key);
    if(this.data[index]) {
      newPair.next = this.data[index];
      this.data[index] = newPair
    }
    else{
      this.data[index] = newPair;
    };
    this.count++;
  }

  insert(key, value) {
    // Your code here 
  }

}


module.exports = HashTable;
