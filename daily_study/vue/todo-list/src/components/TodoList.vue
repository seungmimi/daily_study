<script>
  import { ref, reactive } from 'vue'
  export default {
    setup(){
      const todoItem = reactive(sessionStorage.getItem('todoList') === null ? [] : JSON.parse(sessionStorage.getItem('todoList')));
      let todoView = ref([...todoItem]);
      const todoTitle = ref('');
      const nullText = ref('할 일 목록이 비어있습니다!');

      //todolist 필터
      let filterState = 'all';
      const todoAll = ref(todoItem.length);
      const todoClear = ref(todoItem.filter((item) => item.state === true));
      const todoIng = ref(todoItem.filter((item) => item.state === false));

      const todoFiler = (condition) => {
        if(condition === 'all'){
          todoView.value = [...todoItem];
          filterState = 'all'
          nullText.value = '할 일 목록이 비어있습니다!';
        }else{
          todoView.value = condition === 'clear' ? [...todoClear.value] : [...todoIng.value]
          nullText.value = condition === 'clear' ? '완료된 할 일이 없어요🥲' : '모든 할 일을 완료했어요! 👍'
          filterState = condition === 'clear' ? 'clear' : 'ing';
        }
      }
      

      // todolist 추가
      const todoAdd = () => {
        const addCotent = todoTitle.value;
        if(addCotent === ''){
          alert('내용을 입력 해주세요');
        }else if(todoItem.findIndex(obj => obj.title == addCotent) === -1){
          todoItem.push({title: addCotent, id: Date.now(), state: false});
          sessionStorage.setItem('todoList', JSON.stringify(todoItem));
          todoTitle.value = '';
          todoAll.value = todoItem.length;
          todoFiler(filterState);
        }else{
          console.log(todoItem.findIndex(obj => obj.title == addCotent));
          alert('이미 등록된 내용입니다');
        }
      }

      // todolist 삭제
      const todoDel = (e) => {
        const index = e.target.parentNode.children[0].innerText;
        todoItem.splice(todoItem.findIndex(obj => obj.title == index), 1);
        sessionStorage.setItem('todoList', JSON.stringify(todoItem));
        todoAll.value = todoItem.length;
        todoClear.value = todoItem.filter((item) => item.state === true);
        todoIng.value = todoItem.filter((item) => item.state === false);
        todoFiler(filterState);
      }
      // todolist 수정
      const todoEdit = (e) => {
        const index = todoItem.findIndex(obj => obj.title == e.target.nextSibling.innerText);
        todoItem[index].state = !todoItem[index].state;
        todoClear.value = todoItem.filter((item) => item.state === true);
        todoIng.value = todoItem.filter((item) => item.state === false);
        sessionStorage.setItem('todoList', JSON.stringify(todoItem));
        todoFiler(filterState);
      }

      return{
        todoItem,
        todoView,
        todoTitle,
        nullText,
        todoAll,
        todoClear,
        todoIng,
        todoAdd,
        todoDel,
        todoEdit,
        todoFiler
      }
    }
  }  
</script>

<template>
  <section class="content-box">
    <h1>📝TODO LIST</h1>
    <form class="add-box" @submit.prevent = "todoAdd">
      <input type="text" placeholder="할일을 입력해 주세요" v-model="todoTitle"/>
      <button>추가</button>
    </form>

    <div class="info-box">
      <button class="all" @click="() => {todoFiler('all')}">전체<span class="counter">{{ todoAll }}</span></button>
      <button class="clear" @click="() => {todoFiler('clear')}">완료<span class="counter">{{ todoClear.length }}</span></button>
      <button class="ing" @click="() => {todoFiler('ing')}">진행중<span class="counter">{{ todoIng.length }}</span></button>
    </div>

    <ul class="todo-box">
      <li v-if="todoView.length === 0" class="list-null">
        <p>{{ nullText }}</p>
      </li>
      <li class="todo-list" v-for="item in todoView">
        <div class="todo-obj" :key="item.id">
          <label :class="{checkde : item.state}">
            <input type="checkbox" v-model="item.state" @click="todoEdit">
            <p>{{ item.title }}</p>
          </label>
          <button type="button" @click="(e) => {todoDel(e)}">삭제</button>
        </div>
      </li>
    </ul>
  </section>

</template>
<style scoped>
  .content-box {
    width: 100%;
    padding: 40px 0;
    overflow: hidden;
  }
  .todo-box{
    background-color: #ddd;
    border-radius: 5px;
    padding: 20px 10px;
    height: calc(100vh - 400px);
    overflow-y: scroll;
  }
  /*스크롤 영역 커스텀*/
  .todo-box::-webkit-scrollbar {
    width: 20px;
  }
  .todo-box::-webkit-scrollbar-thumb {
    height: 50%;
    background: #fff;
    border-radius: 50px;
    border: 8px solid #ddd;
  }
  .todo-box::-webkit-scrollbar-track {
    background: none;
  }
  .todo-box>.list-null {
    position: relative;
    height: 100%;
    font-size: 18px;
  }
  .todo-box>.list-null>p {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .todo-list {
    display: block;
    padding: 15px;
    border-bottom: 1px solid #bbb;
  }
  .todo-obj {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }
  .todo-obj>label {
    display: flex;
    gap: 10px;
    width: 100%;
    align-items: center;
  }
  .todo-obj>label.checkde>p {
    text-decoration: line-through;
  }
  .todo-obj>button {
    width: 52px;
    flex-shrink: 0;
  }
  .add-box {
    width: 100%;
    margin: 10px 0;
    display: flex;
    gap: 10px;
  }
  .add-box > input {
    width: 100%;
  }
  .add-box > button {
    flex-shrink: 0;
    width: 80px;
  }
  .info-box {
    padding: 10px 0;
    display: flex;
    gap: 5px;
    justify-content: end;
  }
  .info-box > button {
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 20px;
    padding: 5px 5px 5px 10px;
    border: none;
    color: #fff;
  }
  .info-box > button.all {
    background-color: #00bd7e;
  }
  .info-box > button.clear {
    background-color: #657ee0;
  }
  .info-box > button.ing {
    background-color: #7d7d7d;
  }
  .info-box > button:hover {
    background-color: none;
  }
  .info-box > button > span {
    border-radius: 100%;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #fff;
    color: #000;
    line-height: 20px;
    font-weight: bold;
  }
</style>
