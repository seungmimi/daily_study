class ListManager{
    constructor(){
        this.itemScreen = document.querySelector('.list_wrap');
        this.itemList = [];
    }
    setup(){
        this.bindEvents();
    }
    listMaker(item){
        let list = new DocumentFragment()
        const liWrap = document.createElement('li');
        const liTemplate = 
        `<li class="list_obj">
            <label class="checkbox_wrap">
                <input type="checkbox" class="checkbox">
                <span class="checkbox_icon">
                    <i class="icon icon_check"></i>
                </span>
            </label>
            <p class="content">${item.todo}</p>
            <button type="button" class="del_btn"><i class="icon icon_del"></i></button>
        </li>`
        liWrap.innerHTML = liTemplate;
        list.append(liWrap);
        this.itemList.push({todo: item.todo, state: false});
        this.itemScreen.append(list);
    }
    bindEvents(){
        const listItem = document.querySelectorAll('.list_obj');
        const delBth = document.querySelectorAll('.del_btn');
        const checkBtn = document.querySelectorAll('.checkbox');

        listItem.forEach((e,i) => {
            e.addEventListener('mouseover',()=>{
                delBth[i].style.display = 'block';
            });
            e.addEventListener('mouseleave',()=>{
                delBth[i].style.display = 'none';
            });
        });

        checkBtn.forEach((e,i) => {
            e.addEventListener('click',()=>{
                if(e.checked){
                    listItem[i].classList.add('checked');
                    this.itemList[i].state = true;
                }else{
                    listItem[i].classList.remove('checked');
                    this.itemList[i].state = false;
                }
            });
        });

    }

    

}

export default ListManager;