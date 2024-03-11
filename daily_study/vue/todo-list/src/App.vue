<script>
  import { useRouter, RouterView } from "vue-router";
  // const router = useRouter();
  // export default {
  //   setup(){
  //     const goTodo = () => {
  //       router.push({
  //         path: "/todo",
  //       });
  //     }
  //     return{
  //       goTodo
  //     }
  //   }
  // }
</script>
<template>
  <button>todo-list</button>
  <button>CRUD 게시판</button>
  <button>계산기</button>
  <RouterView />
</template>