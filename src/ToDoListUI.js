import React, {Component} from 'react';
import {Input, Button, List} from 'antd';

//无状态组件 性能更优
const ToDoListUI = (props) =>{
    return (
        <div>
            <div>
                <Input 
                    placeholder="todo info" 
                    value={props.inputValue} 
                    style={{width:'300px',marginRight:'10px'}}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List
                style={{width:'300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={()=>{props.handleItemDelete(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}

/*
class ToDoListUI extends Component {
    render() {
        return (
            <div>
                <div>
                    <Input 
                        placeholder="todo info" 
                        value={this.props.inputValue} 
                        style={{width:'300px',marginRight:'10px'}}
                        onChange={this.props.handleInputChange}
                    />
                    <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
                </div>
                <List
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => (<List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
                />
            </div>
        )
    }
}
*/
export default ToDoListUI;