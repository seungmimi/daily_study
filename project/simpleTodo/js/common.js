//간단한 Todo List 구현 해보기
/*
    1. Todo클래스
    -> 일의 내용, 일의 상태(완료/미완료) 두가지 프로퍼티를 가짐
    -> 일의 상태를 변경하는 매서드가 있음
*/
class Todo{
    constructor(item, status=false){
        this.item = `
        <li class="list_obj">
            <label class="checkbox_wrap">
                <input type="checkbox" class="checkbox">
                <span class="checkbox_icon">
                    <i class="icon icon_check"></i>
                </span>
            </label>
            <p class="content">${item}</p>
            <button type="button" class="del_btn"><i class="icon icon_del"></i></button>
        </li>
        `
        this.status = status
    }
    changeStatus(){
        this.status = !this.status;
    }
}
/*
    2. TodoManager 클래스
    -> 일의 리스트 프로퍼티
    -> 할일을 저장하는 메소드, 할일의 목록을 보여주는 메소드
*/
class TotoManager {
    constructor(){
        this.todoList = [];
    }
    addItem(item, status) {
        const todo = new Todo(item, status);
        this.todoList.push(todo);
        TodoListView.innerHTML += todo.item;
    }
    getItem(){
        return this.todoList
    }
    setChange(item, status){
        const todo = new Todo(item, status);
        this.status = !this.status;
    }
}

const TodoListView = document.querySelector('.list_wrap');
const TodoListViewObj = document.querySelector('.list_obj');

const TodoCheckLabel = document.querySelectorAll('.checkbox_wrap');
const TodoCheckBtn = document.querySelector('.checkbox');

const addInput = document.querySelector('.add_input');
const addBtn = document.querySelector('.add_btn');

const TodoListAdd = new TotoManager();

addBtn.addEventListener('click',() => {
    TodoListAdd.addItem(addInput.value);
});

console.log(TodoCheckLabel);
