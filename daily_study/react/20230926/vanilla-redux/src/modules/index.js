import goodsReducer from "./goodsCounter"
import stockRrducer from "./stockCounter"
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    goodsReducer,
    stockRrducer
});

export default rootReducer;