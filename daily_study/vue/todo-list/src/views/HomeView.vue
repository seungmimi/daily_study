<template>
  <header>
    <button>todo-list</button>
    <button>계산기</button>
    <button>CRUD 게시판</button>
  </header>
  <main class="compoent-view">
    <Calculator />
  </main>
</template>
<script setup>
import TodoList from '../components/TodoList.vue'
import Calculator from '../components/Calculator.vue'
</script>
<style scoped>
  header {
    widows: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 30px 50px;
  }
  .compoent-view {
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 20px rgba(0,0,0,0.2);
  }
</style>