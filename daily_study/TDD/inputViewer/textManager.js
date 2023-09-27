class TextManager{
    constructor(){
        this.value = {data: "hello Lions!"};
    }
    getValue(){
        return this.value.data;
    }
    setValue(newValue){
        this.value.data = newValue;
    }
}