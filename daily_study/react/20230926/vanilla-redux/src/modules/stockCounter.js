export const sale = () => {
    return{type: "SALE"}
}

export const soldOut = () => {
    return{type: "SOLD_OUT"}
}

const initstate = {
    message: '판매중 💸'
}

const stockRrducer = (state = initstate, action) => {
    switch(action.type){
        case "SALE":
            return{
                ...state,
                message: "판매중 💸"
            }
        case "SOLD_OUT":
            return{
                ...state,
                message: "완판! 🥂"
            }
        default:
            return state;
    }
}

export default stockRrducer
