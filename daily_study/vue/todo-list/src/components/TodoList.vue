<script>
  import { ref, reactive } from 'vue'
  export default {
    setup(){
    const todoItem = reactive([{title: "테스트1", id: 1, state: false}, {title: "테스트2", id: 2, state: true}]);
    const todoTitle = ref('');
    const todoAdd = () => {
      const addCotent = todoTitle.value;
      if(addCotent === ''){
        alert('내용을 입력 해주세요');
      }else if(todoItem.findIndex(obj => obj.title == addCotent) === -1){
        todoItem.push({title: addCotent, id: Date.now(), state: false});
      }else{
        console.log(todoItem.findIndex(obj => obj.title == addCotent));
        alert('이미 등록된 내용입니다');
      }
      
    }
    const todoDel = (e) => {
      const index = e.target.parentNode.children[0].innerText;
      todoItem.splice(todoItem.findIndex(obj => obj.title == index), 1);
    }

    return{
      todoItem,
      todoTitle,
      todoAdd,
      todoDel
    }
    }
  }  
</script>

<template>
  <form class="add-box" @submit.prevent = "todoAdd">
    <input type="text" placeholder="할일을 입력해 주세요" v-model="todoTitle"/>
    <button>추가</button>
  </form>
  
  <ul class="todo-box">
    <li class="todo-list" v-for="item in todoItem">
      <div class="todo-obj" :key="item.id">
        <label>
          <input type="checkbox" v-model="item.state">
          <p>{{ item.title }}</p>
        </label>
        <button type="button" @click="(e) => {todoDel(e)}">삭제</button>
      </div>
    </li>
  </ul>
</template>
<style scoped>
  .todo-box{
    background-color: #ddd;
    border-radius: 5px;
    padding: 20px 10px;
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
  .todo-obj>button {
    width: 52px;
    flex-shrink: 0;
  }
</style>
