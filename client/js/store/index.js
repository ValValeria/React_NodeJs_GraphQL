import {createStore} from 'redux';
import data from './initState'
import {GET_POSTS} from './actions'

function reducer(state=data,action){
    switch (action.type) {
        case GET_POSTS:
            return {...state,data:state.data.concat(action.payload)}    
        case "LOGIN":
            return {...state,isAdmin:true}   
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store