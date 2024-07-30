class DynamicArray {

  constructor(defaultSize = 4) {

    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;
  }

  read(index) {
    // index = this.data[index];
    return this.data[index];
  }

  unshift(val) {
      
    for(let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
      this.data[0] = val;
      this.length++;
      return this.length;
  }
  
}
const dynamicArr = new DynamicArray(8);
console.log(dynamicArr.length);
console.log(dynamicArr.capacity);
console.log(dynamicArr.data.length);
console.log(dynamicArr.unshift(1));
console.log(dynamicArr.unshift(2));


module.exports = DynamicArray;
