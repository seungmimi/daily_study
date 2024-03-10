<style src="./component.css"></style>
<template>
  <div>
    <h1 class="title">Vue 게시판</h1>
    <table>
      <tr>
        <th>글쓴이</th>
        <th>제목</th>
        <th>내용</th>
      </tr>
      <tr :key="index" v-for="(data, index) in data" @click="detail(index)">
        <td>{{data.writer}}</td>
        <td>{{data.title}}</td>
        <td>{{data.content}}</td>
      </tr>
    </table>
    <button type="button" @click="write">글쓰기</button>
  </div>
</template>
<script>
  import data from '@/data'
  export default {
    name: 'Read',
    data(){
      return {
        data: data
      }
    },
    methods: {
      write() {
        this.$router.push({
          path: 'create'
        })
      },
      detail(index){
        this.$router.push({
          name: 'Detail',
          params: {
            contentId: index
          }
        })
      }
    }
  }
</script>