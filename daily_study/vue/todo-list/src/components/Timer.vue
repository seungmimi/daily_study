<script>
import { ref } from 'vue'
export default {
  setup() {
    const isStop = ref(false);
    const duration = ref(15 * 1000);
    const insetTime = ref(0); // 입력 시간을 초 단위로 저장합니다.
    const startTime = ref(0); // 타이머 시작 시간 (밀리초 단위)
    let timerId = null; // setInterval에서 반환하는 타이머 ID를 저장할 변수

    const startTimer = () => {
      if (startTime.value <= 0) {
        clearInterval(timerId); // 타이머 종료
        isStop.value = false;
      } else {
        startTime.value -= 100; // 0.1초씩 감소
        isStop.value = true;
      }
    }

    const startTimerFn = () => {
      isStop.value = true;
      clearInterval(timerId); // 기존 타이머가 있다면 중지
      startTime.value = insetTime.value * 1000; // 초 단위를 밀리초 단위로 변환하여 저장
      timerId = setInterval(startTimer, 100); // 1초마다 startTimer 함수를 호출
    }

    const stopTimerFn = () => {
      clearInterval(timerId); // 타이머 중지
    }

    return {
      isStop,
      duration,
      insetTime,
      startTime,
      startTimerFn,
      stopTimerFn
    }
  }
}
</script>

<template>
  <section class="content-box">
    <h1>⏱️ 타이머</h1>
    <div class="timer-body">
      <label>
        <input type="number" v-model="insetTime"/>
        <span>초</span>
      </label>
      <label class="progress">
        <progress :value="startTime / (1000 / insetTime)"></progress>
        <span>{{ (startTime / 1000).toFixed(1) }}</span>
      </label>
      <div class="btn-box">
        <button @click="startTimerFn">{{ isStop ? 'STOP' : 'START'}}</button>
        <button @click="insetTime = 0, startTime = 0">RESET</button>
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
  .timer-body .btn-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .timer-body .btn-box > button {
    height: 60px;
    width: 100px;
  }
</style>