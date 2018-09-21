import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM, INIT_LIST_ACTION } from './actionTypes'

const defaultStatus = {
    inputValue:'',
    list:[]
};

//reducer 可以接受state 但是不可以修改state 
//纯函数指的是，给固定的输入，就一定会有固定的输出，而且不会有任何的副作用
export default (state = defaultStatus, action) => {
    if(action.type === CHANGE_INPUT_VALUE) {
        //深拷贝操作
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}