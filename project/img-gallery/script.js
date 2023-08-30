const nowImg = document.querySelector('.view-frame');
const imgList = document.querySelectorAll('.img-container li');

imgList.forEach(item => {
    item.addEventListener('click',function(){
        //이미지 썸네일 선택
        const selectList = document.querySelector('li.selected');
        if(selectList){
            selectList.classList.remove('selected');
        }
        this.classList.add('selected');
        nowImg.querySelector('img').src = this.querySelector('img').src;
    });
});
