<template>
  <div>
    <div>글쓴이: {{data.writer}}</div>
    <div>글쓴이: {{data.title}}</div>
    <div>글쓴이: {{data.content}}</div>
    <button @click="updata(index)">수정</button>
    <button @click="del">삭제</button>
  </div>
</template>
<script>
import data from '@/data'
export default {
  name: 'Detail',
  data(){
    const index = this.$route.params.contentId
    return {
      data: data[index],
      index: index
    }
  },
  methods: {
    updata(index){
      this.$router.push({
        name: 'Create',
        params: {
          contentId: index
        }
      })
    },
    del(){
      data.splice(this.index, 1);
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>