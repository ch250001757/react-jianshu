import { createStore } from 'redux'
import reduer from './reducer'


const store = createStore(
    reduer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store