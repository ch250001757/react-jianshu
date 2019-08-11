import {actionType} from './index'

const initStoreVal = {
    show:false 
}

export default (preState=initStoreVal,action) =>{
    switch (action.type) {
        case actionType.SEARCH_FOCUS:
            let newState = JSON.parse(JSON.stringify(preState))
            newState.show = true
            return newState
            break;
        case actionType.SEARCH_BLUR:
            let newState2 = JSON.parse(JSON.stringify(preState))
            newState2.show = false
            return newState2
            break;
        default:
            break;
    }

    return preState
}