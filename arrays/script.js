let arr = [10, 8, 9, 4, 7, 2];

// PRINT INTO CONSOLE WITH STATIC VALUE
/* let new_element = 3;
let insert_position = 6;
let i = arr.length - 1;
insert_position -= 1;

console.log(arr);
if (i == insert_position) {
  arr[i + 1] = new_element;
} else {
  for (i; i >= insert_position; i--) {
    if (i >= insert_position) {
      arr[i + 1] = arr[i];
      if (i == insert_position) {
        arr[i] = new_element;
      }
    }
    console.log(i);
  }
}
console.log(arr); */

// INSERT WITH DYNAMIC VALUE
/* const dataDisplay = document.getElementById("data_display");
const elementInput = document.getElementById("element");
const positionInput = document.getElementById("position");
const submit = document.getElementById("submit");
dataDisplay.innerText = arr;

submit.addEventListener("click", function () {
  const elementValue = parseInt(elementInput.value);
  let positionValue = parseInt(positionInput.value) - 1;
  let i = arr.length - 1;
  if (i == positionValue) {
    arr[i + 1] = elementValue;
  } else {
    for (i; i >= positionValue; i--) {
      if (i >= positionValue) {
        arr[i + 1] = arr[i];
        if (i == positionValue) {
          arr[i] = elementValue;
        }
      }
    }
  }
  dataDisplay.innerText = arr;
}); */

// DELETE ELEMENT FROM AN ARRAY STATIC VALUE
/* let delete_position = 5;
delete_position -= 1;
let i = delete_position;
let j = arr.length - 1;

if (i == j) {
  arr.length = delete_position;
} else {
  for (i; i <= j; i++) {
    if (i == j) {
      arr.length = j;
      break;
    } else {
      arr[i] = arr[i + 1];
    }
    console.log(i);
  }
}
console.log(arr); */

// DELETE ELEMENT FROM AN ARRAY DYNAMIC VALUE
const dataDisplay = document.getElementById("data_display");
const positionInput = document.getElementById("position");
const submit = document.getElementById("submit");
dataDisplay.innerText = arr;

submit.addEventListener("click", function () {
  let positionValue = parseInt(positionInput.value) - 1;
  let i = positionValue;
  let j = arr.length - 1;

  if (i == j) {
    arr.length = positionValue;
  } else {
    for (i; i <= j; i++) {
      if (i == j) {
        arr.length = j;
        break;
      } else {
        arr[i] = arr[i + 1];
      }
    }
  }
  dataDisplay.innerText = arr;
});
