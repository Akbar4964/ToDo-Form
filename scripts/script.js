const elForm = document.querySelector(".form-js");

const elToDoInput = document.querySelector(".todo-input");

const elToDoList = document.querySelector(".todo-list");

const elEmptyImage = document.querySelector(".empty-image");

const elBtnsList = document.querySelectorAll(".btn_list");

let list = localStorage.getItem("list")
  ? JSON.parse(localStorage.getItem("list"))
  : [];

let bookList = [];

let heartList = [];

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
      isLike: false,
      isBookmark: false,
    };
    console.log(list);
    list.push(newObj);
    console.log(list);
    localStorage.setItem("list", JSON.stringify(list));
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
  const title = evt.target.dataset.itemTitle;
  const editItem = prompt(`${title}ni tahrirlamoqdasiz...`);
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
    const newElement5 = document.createElement("span");
    const newElement6 = document.createElement("span");
    elToDoList.appendChild(newElement1);
    newElement1.append(newElementP, newElement4);
    newElement1.dataset.itemId = el.id;
    newElement1.classList.add("todo-lists");
    newElement2.textContent = "Edit";
    newElement2.classList.add("btn-edit");
    newElement2.dataset.itemId = el.id;
    newElement2.dataset.itemTitle = el.title;
    newElement3.textContent = "Delete";
    newElement3.classList.add("btn-delete");
    newElement3.dataset.itemId = el.id;
    newElement4.append(newElement2, newElement3, newElement5, newElement6);
    newElement4.classList.add("buttons");

    newElement5.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg data-item-id=${el.id} fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"/>
    </svg>`;
    newElement5.classList = "heart";
    newElement5.dataset.itemId = el.id;
    newElement5.classList = "heart";
    newElement6.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg data-item-id=${
      el.id
    } fill="magenta" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
       viewBox="0 0 212.045 212.045" xml:space="preserve">
    <path class="bookmark ${
      el.isBookmark ? "bookmark-aktive" : ""
    }" d="M167.871,0H44.84C34.82,0,26.022,8.243,26.022,18v182c0,3.266,0.909,5.988,2.374,8.091c1.752,2.514,4.573,3.955,7.598,3.954
      c2.86,0,5.905-1.273,8.717-3.675l55.044-46.735c1.7-1.452,4.142-2.284,6.681-2.284c2.538,0,4.975,0.832,6.68,2.288l54.86,46.724
      c2.822,2.409,5.657,3.683,8.512,3.683c4.828,0,9.534-3.724,9.534-12.045V18C186.022,8.243,177.891,0,167.871,0z"/>
    </svg>`;
    newElement6.classList = "bookmark";
    newElement6.dataset.itemId = el.id;
    newElementP.textContent = el.title;
    newElementP.classList.add("text");
  });
}

rendiredFunc(list);

const addHeardItem = (evt) => {
  evt.target.classList.toggle("heart-aktive");
  const id = evt.target.parentElement.dataset.itemId;
  const editList = list.map((el) => {
    if (el.id == id) {
      console.log(el);
      const newObj = {
        ...el,
        isLike: !el.isLike,
      };
      console.log(newObj);
      return newObj;
    }
    return el;
  });
  list = [...editList];
  localStorage.setItem("list", JSON.stringify(editList));
};

const addBookmarkItem = (evt) => {
  evt.target.classList.toggle("bookmark-aktive");
  const id = evt.target.parentElement.dataset.itemId;
  const bookmarkList = list.map((el) => {
    if (el.id == id) {
      console.log(el);
      const newObj = {
        ...el,
        isBookmark: !el.isBookmark,
      };
      console.log(newObj);
      return newObj;
    }
    return el;
  });
  list = [...bookmarkList];
  localStorage.setItem("list", JSON.stringify(bookmarkList));
};

const clickedList = (evt) => {
  if (evt.target.matches(".btn-delete")) {
    remove(evt);
  } else if (evt.target.matches(".btn-edit")) {
    edit(evt);
  } else if (evt.target.matches(".heart")) {
    addHeardItem(evt);
  } else if (evt.target.matches(".bookmark")) {
    addBookmarkItem(evt);
  }
};

elToDoList.addEventListener("click", clickedList);

elBtnsList.forEach((el) => {
  el.addEventListener("click", (evt) => {
    if (evt.target.matches(".all-list")) {
      rendiredFunc(list);
    } else if (evt.target.matches(".like-list")) {
      const filterdList = list.filter((el) => el.isLike);
      rendiredFunc(filterdList);
    } else if (evt.target.matches(".bookmark-list")) {
      const bookmarkedList = list.filter((el) => el.isBookmark);
      rendiredFunc(bookmarkedList);
    }
    console.log(evt.target);
  });
});

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
