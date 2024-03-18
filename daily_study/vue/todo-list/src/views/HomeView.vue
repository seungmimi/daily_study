<template>
  <header>
    <nav class="tool-list">
      <button v-for = "tool in toolList" @click="changeToolFn(tool)">{{ tool }}</button>
    </nav>
  </header>
  <main class="compoent-view">
    <TodoList v-if="activeTool === 'todo-list'"/>
    <Calculator v-if="activeTool === '계산기'"/>
    <Timer v-if="activeTool === '타이머'" />
  </main>
</template>
<script setup>
import { ref }  from 'vue'
import TodoList from '../components/TodoList.vue'
import Calculator from '../components/Calculator.vue'
import Timer from '../components/Timer.vue'

const toolList = ['todo-list', '계산기', '타이머'];

const activeTool = ref('todo-list');
const changeToolFn = (toolName) => {
  activeTool.value = toolName;
}

</script>
<style scoped>
  header {
    width: 100%;
    height: 60px;
    padding: 20px 80px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .tool-list {
    display: flex;
    gap: 10px;
  }
  .compoent-view {
    max-width: 600px;
    margin: 60px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 20px rgba(0,0,0,0.2);
  }
</style>