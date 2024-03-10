<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'

</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Todo List</h1>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
