# **Data Structure Array**

Data Structure array is an ordered collection of elements that can accessed using a numerical index.

```bash
const arr = ['a',86,true,undefined,['q'],false,12,null,{o:'object'},'mixed']
```

**Custom Array**

```bash
class MyArray {
  constructor(){
    this.length = 0;
    this.data = {}
  }
}
const newArr = new MyArray()
console.log(newArr);
```


**Push Method**➡️ 
Push method allows is to append a new item end of the array

```bash
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
}
const newArr = new MyArray();
newArr.push("apple");
newArr.push("grape");
newArr.push("orange");
console.log(newArr);
```

**Get Method**➡️ 

```bash
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

  get(idx) {
    return this.data[idx];
  }
}
const newArr = new MyArray();
newArr.push("apple");
newArr.push("grape");
newArr.push("orange");
console.log(newArr.get(1));
```

**Pop Method**➡️ 
It remove the last element of an array

```bash
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
```


**Shift Method**➡️ 
