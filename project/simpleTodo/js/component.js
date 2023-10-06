//ListManager: 리스트를 관리하고 화면에 뿌려준다
class ListManager{
    constructor(){
        this.itemList = [];
        this.state = false;
        this.screen = ''
    }
    addList(content){
        this.itemList.push({'content':content, 'state': this.state});
    }
    showScreen(){
        this.screen = this.itemList.map(e => {
            return(
        `
            <li class="list_obj">
                <label class="checkbox_wrap">
                    <input type="checkbox" class="checkbox">
                    <span class="checkbox_icon">
                        <i class="icon icon_check"></i>
                    </span>
                </label>
                <p class="content">${e.content}</p>
                <button type="button" class="del_btn"><i class="icon icon_del"></i></button>
            </li>
        `)
        });
        
    }
}

const listManager = new ListManager();
const addBtn = document.querySelector('.add_btn');
const screen = document.querySelector('.list_wrap');

addBtn.addEventListener('click',()=>{
    const content = document.querySelector('.add_input');
    listManager.addList(content.value);
    screen.innerHtml += listManager.screen;
    content.value = null;
})