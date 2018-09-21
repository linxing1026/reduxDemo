import { takeEvery, put } from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';

function* getInitList() {
    try {
        const res = yield axios.get('/api/toDoList');
        const action = initListAction(res.data);
        yield put(action);
    }catch(e) {
        console.log(e)
    }
}

//generator函数
function* mySaga() {
    yield  takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;