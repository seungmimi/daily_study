<script>
import { ref } from 'vue'
export default {
  setup(){
    const mathList = ['+','-','*','/']; //사용할 연산자
    const inputData = ref(''); //입력된 데이터
    const resultData = ref(''); //결과 데이터
    const isResult = ref(false); //결과 확인여부 체크
    const isMath = ref(false); //수식 연속 입력 여부 체크
    const aletrMes = ref('경고메시지');
    const isAlert = ref(false);

    //경고메시지 출력
    const alertMesFn = (text) => {
      isAlert.value = true;
      aletrMes.value = text;
      setTimeout(() => {
        isAlert.value = false;
      }, 2000);
    }

    //초기화 함수
    const resetFn = () => {
      inputData.value = '';
      resultData.value = '';
      isResult.value = false;
    }
    //숫자 입력
    const inputNumFn = (e) => {
      if(isResult.value){
        resetFn();
      }
      const data = parseInt(e.target.innerText);
      inputData.value = inputData.value + data;
      isMath.value = false;
    }
    //연산자 입력
    const inputMathmFn = (e) => {
      if(isResult.value){
        resetFn();
      }
      
      if(isMath.value){ //예외처리1: 연속된 수식 입력
        alertMesFn('연속된 수식은 입력할 수 없습니다 😣');
      }else if(inputData.value === ''){ //예외처리2: 수식으로 시작하는 계산식
        alertMesFn('계산식은 숫자부터 시작해주세요 😣');
      }else{
        const data = e.target.innerText;
        inputData.value = inputData.value + data;
        isMath.value = true;
      }

    }
    //입력값 지우기
    const delDataFn = () => {
      inputData.value = inputData.value.slice(0,-1);
      resultData.value = '';
    }
    //결과값 출력
    const resultFn = () => {
      const lastData = inputData.value.slice(-1);
      if(isNaN(parseInt(lastData))){
        alertMesFn('계산식이 완성되지 않았습니다 😣');
      }else{
        resultData.value = eval(inputData.value.replace(/\b0+(\d+)/g, '$1'))//0으로 시작하는 숫자처리(02 -> 2)
        isResult.value = true;
      }
    }
    return {
      mathList,
      inputData,
      resultData,
      aletrMes,
      isAlert,
      resultFn,
      inputNumFn,
      inputMathmFn,
      delDataFn
    }
  }
}
</script>
<template>
  <section class="content-box">
    <h1>🧮 계산기</h1>
    <article class="calculator-body">
      <div class="calculator-view" :class="[resultData === '' ? '' : 'active', {alertActive : isAlert}]">
        <input type="text" v-model="inputData" readonly>
        <input type="text" v-model="resultData" class="result-input" readonly>
      </div>
      <div class="calculator-key">
        <div class="num-box">
          <button v-for="num in 9" :key=num-1 @click="(e)=>{inputNumFn(e)}">{{ num }}</button>
          <button @click="delDataFn">지우기</button>
          <button @click="(e)=> {inputNumFn(e)}">0</button>
          <button @click="resultFn">=</button>
        </div>
        <div class="math-box">
          <button v-for="math in mathList" @click="(e)=>{inputMathmFn(e)}">{{ math }}</button>
        </div>
      </div>
    </article>
  </section>
  <div class="alert-mes" :class="{active : isAlert}">
    <p>{{ aletrMes }}</p>
  </div>
</template>
<style scoped>
  .content-box {
    padding: 40px 0;
    overflow: hidden;
  }
  .calculator-body {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .calculator-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
    border-radius: 5px;
    width: 100%;
    height: 80px;
    margin-top: 10px;
    transition: all 0.2s;
  }
  .calculator-view > input {
    border: none;
    outline: none;
    height: 35px;
    width: 100%;
    font-size: 24px;
    transition: all 0.2s;
  }
  .calculator-view > input.result-input {
    color: #00bd7e;
    height: 0px;
    font-size: 0;
    font-weight: bold;
  }
  .calculator-view.active  > input:first-child {
    color: #b7b7b7;
  }
  .calculator-view.active > input.result-input {
    height: 35px;
    font-size: 30px;
  }
  .calculator-view.alertActive {
    animation: alertActiveAni .1s 2;
    border: 2px solid #b13737;
  }
  @keyframes alertActiveAni {
  from {
    border: 2px solid #b13737;
    transform: rotate(1deg);
  }
  to {
    transform: rotate(-1deg);
  }
}

  .calculator-key {
    display: flex;
    gap: 1px;
  }
  .calculator-key > .num-box {
    width: 100%;
    max-width: 500px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
  }
  .calculator-key > .num-box > button {
    width: 100%;
    height: 50px;
  }
  .calculator-key > .math-box {
    width: 100%;
    display: flex;
    gap: 1px;
    max-width: 100px;
    flex-direction: column;
  }
  .calculator-key > .math-box > button {
    width: 100%;
    height: 50px;
    background-color: #b7b7b7;
    color: #fff;
    font-size: 24px;
  }
  .calculator-key > .math-box > button:hover {
    background-color: #00bd7e;
  }
  .alert-mes {
    padding: 5px 20px;
    border-radius: 50px;
    color: #fff;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 10%;
    opacity: 0%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.5s;
  }
  .alert-mes.active {
    top: 20%;
    opacity: 100%;
  }
  
</style>