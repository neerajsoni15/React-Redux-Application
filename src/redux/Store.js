import {createStore} from 'redux'

import Reducer from './CakeApp/CakeReducer'

const Store = createStore(Reducer);

export default Store 