let buketObj = document.getElementsByClassName('list_obj');
let buketObjLenth = buketObj.length;

for(let i = 0; i < buketObjLenth; i++){
    console.log(buketObj[i]);
    buketObj[i].addEventListener('click',function(){
        buketObj[i].classList.toggle('active');
    });

}