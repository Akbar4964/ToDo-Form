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
  const id = evt.target.dataset.itemId;
  const findIdx = list.findIndex((el) => el.id == id);
  list.splice(findIdx, 1);
  rendiredFunc(list);
}

function edit(evt) {
  const id = evt.target.dataset.itemId;
  const editItem = prompt("Tekstni tahrirlang...");
  const editList = list.map((el) => {
    if (el.id == id) {
      return {
        ...el,
        title: editItem,
      };
    }
    return el;
  });
  rendiredFunc(editList);
}

function rendiredFunc(array) {
  elToDoList.innerHTML = null;
  array.forEach((el) => {
    const newElement1 = document.createElement("li");
    const newElementP = document.createElement("p");
    const newElement2 = document.createElement("button");
    const newElement3 = document.createElement("button");
    const newElement4 = document.createElement("div");
    elToDoList.appendChild(newElement1);
    newElement1.append(newElementP, newElement4);
    newElement1.classList.add("todo-lists");
    newElement2.textContent = "Edit";
    newElement2.classList.add("btn-edit");
    newElement2.dataset.itemId = el.id;
    newElement3.textContent = "Delete";
    newElement3.classList.add("btn-delete");
    newElement3.dataset.itemId = el.id;
    newElement4.append(newElement2, newElement3);
    newElement4.classList.add("buttons");
    newElementP.textContent = el.title;
    newElementP.classList.add("text");
  });
}

const clickedList = (evt) => {
  if (evt.target.matches(".btn-delete")) {
    remove(evt);
  } else if (evt.target.matches(".btn-edit")) {
    edit(evt);
  }
};

// elToDoList.addEventListener("click", clickedList);

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
