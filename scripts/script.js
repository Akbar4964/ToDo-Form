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
  } else {
    alert("bu maluot mavjud");
  }
  list.push(newObj);
  elToDoInput.value = null;
  rendiredFunc(list);
});

function remove(id) {
  console.log(id);
  const findIdx = list.findIndex((el) => el.id == id);
  list.splice(findIdx, 1);
  rendiredFunc(list);
}

function rendiredFunc(arr) {
  elToDoList.innerHTML = null;

  arr.forEach((el) => {
    elToDoList.innerHTML += `
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
      `;
  });
}
