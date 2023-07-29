let loginBtn = document.getElementsByClassName('login_btn');
let loginForm = document.getElementById('login_id');
let passwordForm = document.getElementById('login_password');

loginBtn[0].addEventListener('click',function(){
    //1. (로그인 버튼 클릭 시)아이디 영역이 비어있을 때
    if(loginForm.value == ""){
        loginForm.classList.add('unfulfilled');
        passwordForm.classList.remove('unfulfilled');
    }else{
        loginForm.classList.remove('unfulfilled');
        passwordForm.classList.add('unfulfilled');
    }
});