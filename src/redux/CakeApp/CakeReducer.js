import {BUY_CAKE} from './actionType'

const inital = {
    numberOfCakes: 10
}
const Reducer = (state = inital,action) =>{
    switch(action.type){
        case BUY_CAKE: 
            return{
                ...state,
                numberOfCakes : state.numberOfCakes -1
            }
        default:
            return state;
    }
}

export default Reducer