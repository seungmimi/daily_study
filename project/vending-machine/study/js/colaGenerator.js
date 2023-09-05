class ColaGenerator {
    //초기화 값
    constructor(){
        this.itemList =  document.querySelector('.cola-list');
    }

    async setup(){
        const respons = await this.loadData();
        this.colaFactory(respons);
    }

    async loadData(){
        try{
            const respons = await fetch('./items.json');
            if(!respons.ok){
                throw new Error(respons.status);
            }
            return await respons.json();
        }catch(error){
            console.error('콜라' + error);
        }
    }
    colaFactory(data){
        const docFrag = new DocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemtemplate = `<button type="button" class="btn-cola" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
            <img src="./img/${el.img}" alt="" />
            <span class="cola-name">${el.name}</span>
            <strong class="cola-price">${el.cost}</strong>
            </button>`
            item.innerHTML = itemtemplate;
            docFrag.append(item);
        });
        this.itemList.append(docFrag);
    }
}

export default ColaGenerator;
