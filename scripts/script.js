const elForm = document.querySelector(".form-js");

const elToDoInput = document.querySelector(".todo-input");

const elToDoList = document.querySelector(".todo-list");

const elEmptyImage = document.querySelector(".empty-image");

const list = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let value = elToDoInput.value;
  const findIdx = list.findIndex((el) => el.title === value.trim());
  if (value === "") {
    alert("malumot mavjud emas");
  } else if (findIdx < 0) {
    const newObj = {
      title: value.trim(),
      id: Date.now(),
    };
    list.push(newObj);
  } else {
    alert("bu malumot mavjud");
  }

  elToDoInput.value = null;
  rendiredFunc(list);
});

function remove(evt) {
  if (evt.target.matches(".btn-delete")) {
    console.log("bu btn delete");
  }
  // console.log(id);
  // const findIdx = list.findIndex((el) => el.id == id);
  // list.splice(findIdx, 1);
  // rendiredFunc(list);
}

function rendiredFunc(arr) {
  elToDoList.innerHTML = null;
  arr.forEach((el) => {
    const newElement1 = document.createElement("li");
    const newElementSpan = document.createElement("span");
    const newElement2 = document.createElement("button");
    const newElement3 = document.createElement("button");
    const newElement4 = document.createElement("div");
    newElement2.textContent = "Edit";
    newElement2.classList.add("btn");
    newElement1.classList.add("list-item");
    // newElement3.textContent = "Delete";
    newElement3.classList.add("btn-delete");
    newElementSpan.textContent = el.title;
    newElement4.append(newElement2, newElement3);
    newElement1.append(newElement4, newElementSpan);
    elToDoList.appendChild(newElement1);

    // if (newElement1.length) {
    //   elEmptyImage.remove();
    // }
  });
}

elToDoList.addEventListener("click", remove);

// const elForm = document.querySelector(".form-js");

// const elToDoInput = document.querySelector(".todo-input");

// const elToDoList = document.querySelector(".todo-list");

// const elEmptyImage = document.querySelector(".empty-image");

// const list = [];

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   let value = elToDoInput.value;
//   const findIdx = list.findIndex((el) => el.title === value.trim());
//   if (value === "") {
//     alert("malumot mavjud emas");
//   } else if (findIdx < 0) {
//     const newObj = {
//       title: value.trim(),
//       id: Date.now(),
//     };
//     list.push(newObj);
//   } else {
//     alert("bu maluot mavjud");
//   }

//   elToDoInput.value = null;
//   rendiredFunc(list);
// });

// function remove(id) {
//   console.log(id);
//   const findIdx = list.findIndex((el) => el.id == id);
//   list.splice(findIdx, 1);
//   rendiredFunc(list);
// }

// function rendiredFunc(arr) {
//   elToDoList.innerHTML = null;

//   arr.forEach((el) => {
//     elToDoList.innerHTML += `
//       <li class="todo">
//           <span class="checked">${el.title}</span>
//           <button
//           class="delete-btn"
//           onclick="remove(this)"
//           >
//           Edit
//           </button>
//           <button
//           class="delete-btn"
//           onclick="remove(${el.id})"
//           >
//           Delete
//           </button>
//       </li>
//       `;
//   });
// }

// const elForm = document.querySelector(".form-js");

// const elToDoInput = document.querySelector(".todo-input");

// const elToDoList = document.querySelector(".todo-list");

// const elEmptyImage = document.querySelector(".empty-image");

// const list = [];

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   let value = elToDoInput.value;
//   const findIdx = list.findIndex((el) => el.title === value.trim());
//   if (value === "") {
//     alert("malumot mavjud emas");
//   } else if (findIdx < 0) {
//     const newObj = {
//       title: value.trim(),
//       id: Date.now(),
//     };
//     list.push(newObj);
//   } else {
//     alert("bu maluot mavjud");
//   }

//   elToDoInput.value = null;
//   rendiredFunc(list);
// });

// function remove(id) {
//   console.log(id);
//   const findIdx = list.findIndex((el) => el.id == id);
//   list.splice(findIdx, 1);
//   rendiredFunc(list);
// }

// function rendiredFunc(arr) {
//   elToDoList.innerHTML = null;

//   arr.forEach((el) => {
//     elToDoList.innerHTML += `
//       <li class="todo">
//           <span class="checked">${el.title}</span>
//           <button
//           class="delete-btn"
//           onclick="remove(this)"
//           >
//           Edit
//           </button>
//           <button
//           class="delete-btn"
//           onclick="remove(${el.id})"
//           >
//           Delete
//           </button>
//       </li>
//       `;
//   });
// }

// const elForm = document.querySelector(".form-js");

// const elToDoInput = document.querySelector(".todo-input");

// const elToDoList = document.querySelector(".todo-list");

// const elEmptyImage = document.querySelector(".empty-image");

// const list = [];

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   let value = elToDoInput.value;
//   const findIdx = list.findIndex((el) => el.title === value.trim());
//   if (value === "") {
//     alert("malumot mavjud emas");
//   } else if (findIdx < 0) {
//     const newObj = {
//       title: value.trim(),
//       id: Date.now(),
//     };
//     list.push(newObj);
//   } else {
//     alert("bu maluot mavjud");
//   }

//   elToDoInput.value = null;
//   rendiredFunc(list);
// });

// function remove(id) {
//   console.log(id);
//   const findIdx = list.findIndex((el) => el.id == id);
//   list.splice(findIdx, 1);
//   rendiredFunc(list);
// }

// function rendiredFunc(arr) {
//   elToDoList.innerHTML = null;

//   arr.forEach((el) => {
//     elToDoList.innerHTML += `
//       <li class="todo">
//           <span class="checked">${el.title}</span>
//           <button
//           class="delete-btn"
//           onclick="remove(this)"
//           >
//           Edit
//           </button>
//           <button
//           class="delete-btn"
//           onclick="remove(${el.id})"
//           >
//           Delete
//           </button>
//       </li>
//       `;
//   });
// }
