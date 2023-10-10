import ListManager from "./component.js";

const listManager = new ListManager();

const addBtn = document.querySelector('.add_btn');
const toggleWrap = document.querySelector('.toggle_wrap');
const addInput = document.querySelector('.add_input');
const alerMsg = document.querySelector('.add_alert');

addBtn.addEventListener('click',()=>{
    if(addInput.value === ''){
        return alerMsg.style.display = 'block';
    }else{
        alerMsg.style.display = 'none';
        listManager.listMaker({todo: addInput.value, state: false});
        toggleWrap.style.bottom = '300px';
        setTimeout(()=>{
            toggleWrap.style.bottom = '-100px';
        },1500);
    }
    console.log(listManager.itemList);
    listManager.setup();
});


