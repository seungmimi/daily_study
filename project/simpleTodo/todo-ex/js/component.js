class ListManager{
  constructor(){
    this.listScreen = document.querySelector('.todolist-box');
    this.todoList = [];
  }
  listMaker(item){
    let itemContnet = new DocumentFragment();
    const liBox = document.createElement('li');
    liBox.classList.add('todo-obj');
    const liBoxTemplate = `
    <label>
      <input type="checkbox">
      <span class="deco-check"></span>
      <p class="todo-des">${item.todo}</p>
    </label>
    <button type="button" class="del-btn" onclick = "this.parentElement.style.display = 'none'">삭제</button>
    `
    liBox.innerHTML = liBoxTemplate;
    itemContnet.append(liBox);
    this.listScreen.append(itemContnet);
    this.todoList.push({todo: item.todo, state: false});
  }
}

export default ListManager