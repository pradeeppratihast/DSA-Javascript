let arr = [10, 8, 9, 4, 7, 2];

// PRINT INTO CONSOLE WITH STATIC VALUE
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

// INSERT WITH DYNAMIC VALUE
const dataDisplay = document.getElementById("data_display");
const elementInput = document.getElementById("element");
const positionInput = document.getElementById("position");
const submit = document.getElementById("submit");
dataDisplay.innerText = arr;

submit.addEventListener("click", function () {
  const elementValue = parseInt(elementInput.value);
  let positionValue = parseInt(positionInput.value);
  positionValue -= 1;

  for (let i = arr.length - 1; i >= positionValue; i--) {
    if (i >= positionValue) {
      arr[i + 1] = arr[i];
    }
    if (i == positionValue) {
      arr[i] = elementValue;
    }
  }
  dataDisplay.innerText = arr;
});
