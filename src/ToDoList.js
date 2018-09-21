import React, { Component} from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { getInitList, getTodoList, getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import ToDoListUI from './ToDoListUI';
import axios from 'axios';

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }     

    render() {
        return (
            <ToDoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )    
    }

    componentDidMount() {
        // const action = getTodoList();
        // store.dispatch(action);
        // axios.get('/api/toDoList').then((res)=>{
        //     const data = res.data;
        //     const action = initListAction(data);
        //     store.dispatch(action);
        // }).catch()
        const action = getInitList();
        store.dispatch(action);
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = getAddItemAction()
        store.dispatch(action);
    }

    handleItemDelete(index) {
        // const action = getDeleteItemAction(index)
        // store.dispatch(action);
        console.log(index)
    }

}

export default ToDoList;