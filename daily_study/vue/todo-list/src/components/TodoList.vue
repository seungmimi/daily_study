<script>
  import { ref } from 'vue'
  export default {
    setup(){
    const todoItem = ref([{title: "테스트1", id: Date.now()}, {title: "테스트2", id: Date.now()}])
    return{
      todoItem
    }
    }
  }  
</script>

<template>
  <ul class="todo-box">
    <li class="todo-list" v-for="item in todoItem">
      <div class="todo-obj" :key="item.id">
        <label>
          <input type="checkbox" v-model="item.state">
          <p>{{ item.title }}</p>
        </label>
        <button type="button">삭제</button>
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
