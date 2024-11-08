function findPairs(arr) {
  // O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`${arr[i]},${arr[j]}`);
    }
  }

  // O(n)
  for (let k = 0; k < arr.length; k++) {
    console.log(k);
  }
}

// if we combine all the "O" operations it becomes O(n^2 + n)
// O(n^2) is a dominant term
// "n" is a Non- dominant term
// So we remove the 'non-dominant' term and we're only left with O(n^2)
// This way, we simply our BigO

const numbers = [1, 2, 3, 4, 5, 6];
findPairs(numbers);
