import React, { useEffect } from 'react';
import { AiFillDelete } from "react-icons/bs";
import { FaTrash, FaEdit } from 'react-icons/fa';
import { addTodo, updateCheckBox } from '../../redux/Todo/TodoActions';
import { connect } from 'react-redux';
const Item = (props) => {

    console.log('redux-todo', props.todo_list);

    const markCompleted = (id) => {
        const singleTodo = props.todo_list.filter((data) => {
            return data.id == id;
        })
        console.log('before', singleTodo);
        singleTodo[0].isCompleted = !singleTodo[0].isCompleted;
        console.log('after', singleTodo);
        props.updateCheckBox(singleTodo);
        // console.log(singleTodo[0].title);
    }

    useEffect(() => {

    }, []);


    return (
        <>
            <div className='item-box'>
                <div className='item'>
                    <div className='margin-right-5'>
                        <input type="checkbox" onClick={() => markCompleted(props.todoData.id)} className='checkbox' checked={props.todoData.isCompleted ? true : false} />
                    </div>
                    <div>
                        <span className={props.todoData.isCompleted ? 'todo-title line-throughh' : 'todo-title'}>{props.todoData.title}</span>
                        <p className='todo-date'>{props.todoData.date}</p>
                    </div>
                </div>
                <div className='item right-item'>
                    <div className='trash-btn'>{<FaTrash />}</div>
                    <div className='edit-btn'>{<FaEdit />}</div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        todo_list: state.todo_list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCheckBox: (data) => dispatch(updateCheckBox(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
// export default Item;
