# **Big O Notation**

**Big O Notation** helps us to understand how long an algorithm will take to run [`Time Complexity`] or how much memory it will need as the amount of data it handles grow [`Space Complexity`]

**O(n)**
Signifies that the execution time of the algorithm grows `linearly` in proportion to the size of the `input data (n)`.

🤝As the number of items in the input data increase,the time it takes for the algorithm to run increase correspondingly.

🤔 Imagine you have a list of groceries.To find a specific item (like milk)
you might need to scan through the entire list.If the list has 5 items,it`ll take a relatively short time.But if the list has 5000 items,it'll take considerably longer.This is the essence of linear complexity.[input grows,time grows]

```bash
const groceries = ['eggs','Bread',"Strawberry","Milk","Bananas"]
# O (n)
const searchForItem = (item) =>{
    for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      return `Found ${item}`;
    }
  }
  for (let j = 0; j < groceries.length; j++) {
    if (groceries[j] === item) {
      return `Found ${item}`;
    }
  }
    # n + n = 2n -> !O(2n) -> O(n)
    # Drop the constant so it became O(n)
}

searchForItem('eggs')
```

**O(1)**
O(1) as known as constant time,signifies that the execution time of an algorithm remains constant regardless of the input size.

🤝 Here we can only care about the specific items which we searching for.It remains constant [`O(1)`].No matter my input grows or shrinks.

🤔 Imagine you have a box filled with items,and you know exactly where each item is located.To get a specific item,you go directly to its location,taking the same amount of the time irrespective of how many items are in the box.

```bash
const numbers = [1,2,3,4,5,6]
# O(1)
const getElement = (arr,idx) => arr[idx]
getElement(numbers,1)
```

**O(n^2)**
Indicates the algorithm's execution time grows quadratically with the size of the input data (represented by n)

🤔 Imagine you have a box of items and want to compare each item with every other item to find specific pairs.As the number of items(n) increase, the number of comparisons(n^2) grows much faster.

```bash
function findPairs(arr) {
  # O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`${arr[i]},${arr[j]}`);
    }
  }

  # O(n)
  for (let k = 0; k < arr.length; k++) {
    console.log(k);
  }
}

# if we combine all the "O" operations it becomes O(n^2 + n)
# O(n^2) is a dominant term
# "n" is a Non- dominant term
# So we remove the 'non-dominant' term and we're only left with O(n^2)
# This way, we simply our BigO

const numbers = [1, 2, 3, 4, 5, 6];
findPairs(numbers);
```