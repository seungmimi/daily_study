import ListManager from "./component.js";

const listManager = new ListManager();
const addBtn = document.querySelector('.add-btn');
const addInput = document.querySelector('.add-input');

addBtn.addEventListener('click',() => {
  listManager.listMaker({todo: addInput.value, state: false});
})