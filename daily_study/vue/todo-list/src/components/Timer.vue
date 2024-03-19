<script>
export default {
  
}
</script>
<template>
  <section class="content-box">
    <h1>⏱️ 타이머</h1>
    <div class="timer-body">
      <label class="progress">
        <progress value="10"></progress>
        <span>남은시간</span>
      </label>
      <label>
        <input type="number" />
        <span>초</span>
      </label>
      <div>
        <button>START</button>
        <button>STOP</button>
        <button>RESET</button>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .content-box {
    padding: 40px 0;
    overflow: hidden;
  }
  .timer-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .timer-body .progress {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
  }
  .timer-body .progress > progress{
    width: calc(100% - 100px);
  }
  .timer-body .progress > span {
    width: 80px;
  }
</style>