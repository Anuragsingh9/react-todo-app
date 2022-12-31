import React, { useEffect, useState } from 'react';
import { AiFillDelete } from "react-icons/bs";
import { FaTrash, FaEdit } from 'react-icons/fa';
import { addTodo, updateCheckBox, handlePopUp, getTodo,currentTodoData } from '../../redux/Todo/TodoActions';
import { connect } from 'react-redux';
const Item = (props) => {

    console.log('redux-todo', props.todo_list);
    const [currentTodo, setCurrentTodo] = useState("");
    const [currentTodoData, setCurrentTodoData] = useState({});

    const markCompleted = (id) => {
        const singleTodo = props.todo_list.filter((data) => {
            return data.id == id;
        })
        console.log('before', singleTodo);
        singleTodo[0].isCompleted = !singleTodo[0].isCompleted;
        console.log('after', singleTodo);
        props.updateCheckBox(singleTodo);
    }

    useEffect(() => {
        console.log('single dataaa',currentTodoData)
    }, [currentTodoData]);

    const openPopUp = (id) => {
        props.handlePopUp(true);
        const singleTodo = findTodo(id,props.todo_list);
        console.log('singl data',singleTodo[0]);
        props.currentTodo(singleTodo);
        setCurrentTodoData(singleTodo[0])
    }

    const findTodo = (id, allTodo) => {
        return allTodo.filter((current) => {
            return current.id == id;
        });
    }

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
                    <div className='edit-btn' onClick={() => openPopUp(props.todoData.id)}>{<FaEdit />}</div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        todo_list: state.todo_list,
        is_pop_up_open: state.handle_pop,
        single_todo_data: state.single_todo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCheckBox: (data) => dispatch(updateCheckBox(data)),
        handlePopUp: (data) => dispatch(handlePopUp(data)),
        getTodo: (data) => dispatch(getTodo(data)),
        currentTodo: (data) => dispatch(currentTodoData(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
