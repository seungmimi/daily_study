/*팝업*/
const modal = document.getElementsByClassName('modal-body');
const modalBg = document.querySelector('.modal-bg');
const openModal = document.getElementsByClassName('extra-box');

for(let i =0; i<modal.length; i++){
  openModal[i].addEventListener('click',function(){
    modal[i].classList.add('active');
    modalBg.classList.add('active');
    document.body.classList.add('no-scroll');
  })
}
const closePopup = () => {
  for(let i =0; i<modal.length; i++){
    modal[i].classList.remove('active');
    modalBg.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
}
/*마우스 커스텀*/
const circle = document.querySelector('.cursor-circle');
const pointerBox = document.getElementsByClassName('pointer-obj');
document.addEventListener('mousemove',function(e){
  const mouseX = e.pageX;
  const mouseY = e.pageY;
  circle.style.opacity = 1;
  circle.style.left = mouseX + 'px';
  circle.style.top = mouseY + 'px';
  console.log()
});
document.addEventListener('mouseleave',function(e){
  circle.style.opacity = 0;
});
for(let i = 0; i < pointerBox.length; i++){
  pointerBox[i].addEventListener('mouseenter',function(){
    circle.classList.add('pointer');
  });
  pointerBox[i].addEventListener('mouseleave',function(){
    circle.classList.remove('pointer');
  });
}
/*다크모드-라이트모드 토글*/
const docBody = document.getElementsByTagName('body')[0];
const modeInfoText = document.querySelector('.toggle-info');
const modeState = document.querySelector('#toggle');
modeState.addEventListener('click',function(){
  if(modeState.checked){
    modeInfoText.innerHTML="LIGHT";
    docBody.setAttribute('color-theme','light');
  }else {
    modeInfoText.innerHTML="DARK";
    docBody.setAttribute('color-theme','dark');
  }
})

/*모바일 nav*/
const mobileNavBtn = document.querySelector('.more-nav');
const mobileNavList = document.querySelector('.mobile-nav-list');
const mobileNavListObj = document.querySelectorAll('.mobile-nav-list .nav-obj');

mobileNavBtn.addEventListener('click',function(){
  mobileNavList.classList.contains('active')?
  mobileNavList.classList.remove('active'):
  mobileNavList.classList.add('active');
});
for(let i = 0; i<mobileNavListObj.length; i++){
  mobileNavListObj[i].addEventListener('click',function(){
    mobileNavList.classList.remove('active');
  });
}
docBody.addEventListener("click", function(e) {
  if(!e.target.classList.contains('more-nav') && !e.target.classList.contains('bar')){
    mobileNavList.classList.remove('active');
  }
});  





/*택스트 애니메이션*/
document.addEventListener('mousemove', function(e) {
  const text = document.getElementsByClassName('ani-title');
  const codeBox = document.getElementsByClassName('code-obj');
  const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
  const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
  for(let i =0; i<text.length; i++){
    text[i].style.transform = 'skew(' + x * 30 + 'deg, ' + y * 20 + 'deg)';
  }
  for(let i =0; i<codeBox.length; i++){
    codeBox[i].style.transform = 'skew(' + x * 20 + 'deg, ' + y * 20 + 'deg)';
  }
});
