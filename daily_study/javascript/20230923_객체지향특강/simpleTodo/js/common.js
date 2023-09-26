//간단한 Todo List 구현 해보기
/*
1. Todo클래스
-> 일의 내용, 일의 상태(완료/진행중/미완료) 두가지 프로퍼티를 가짐
-> 일의 상태를 변경하는 매서드가 있음
*/
class Todo{
    constructor(item, status=false){
        this.item = item
        this.status = status
    }
    changeStatus(newStatus){
        this.status = newStatus
    }
}
/*
    2. TodoManager 클래스
        -> 일의 리스트 프로퍼티
        -> 할일을 저장하는 메소드, 할일의 목록을 보여주는 메소드, 할일의 남은 갯수를 보여주는 메소드
*/
class TotoManager {
    constructor(){
        this.todoList = [];
    }
    addItem(item, status) {
        const todo = new Todo(item, status);
        this.todoList.push(todo);
    }
    getItem(){
        return this.todoList
    }
    getLeftTodoCount(){
        
    }
}