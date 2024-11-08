class MyArray {
  constructor() {
    this.length = 0;
    this.data = [];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop(){
    // last element from an array.
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    return lastItem
  }
}
const newArr = new MyArray();
newArr.push("apple");
newArr.push("grape");
newArr.push("orange");
newArr.push("Strawberry");
newArr.push("Pineapple");
newArr.push("Kiwi");
newArr.pop()

