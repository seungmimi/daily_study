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
      <input type="checkbox" class="tobo-check">
      <span class="deco-check"></span>
      <p class="todo-des">${item.todo}</p>
    </label>
    <button type="button" class="del-btn">삭제</button>
    `
    liBox.innerHTML = liBoxTemplate;
    itemContnet.append(liBox);
    this.listScreen.append(itemContnet);
    this.todoList.push({todo: item.todo, state: false});

    const delBtn = document.querySelectorAll('.del-btn');
    const checkBtn = document.querySelectorAll('.tobo-check');

    checkBtn[this.todoList.length-1].addEventListener('click',(event) => {
      if(event.checked){
        // this.todoList[i].state = true;
        console.log(this.todoList);
      }else{
        // this.todoList[i].state = false;
        console.log(this.todoList);
      }
    });
    
    delBtn[this.todoList.length-1].addEventListener('click',(event) => {
      event.target.parentElement.style.display = 'none';
    });
  }
}

export default ListManager