function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const mergedArray = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
