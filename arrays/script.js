let arr = [10, 8, 9, 4, 7, 2];
let new_element = 3;
let position = 6;
position -= 1;

console.log(arr);
for (let i = arr.length - 1; i >= position; i--) {
  if (i >= position) {
    arr[i + 1] = arr[i];
  }
  if (i == position) {
    arr[i] = new_element;
  }
  console.log(i);
}
console.log(arr);
