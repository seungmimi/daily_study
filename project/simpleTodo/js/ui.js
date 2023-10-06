const listItem = document.querySelectorAll('.list_obj');
const delBth = document.querySelectorAll('.del_btn');

listItem.forEach((e,i)=>{
    e.addEventListener('mouseover',()=>{
        delBth[i].style.display = 'block';
    });
    e.addEventListener('mouseleave',()=>{
        delBth[i].style.display = 'none';
    })
});