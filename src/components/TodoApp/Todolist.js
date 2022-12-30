import React, { useState, useEffect } from 'react';
import './todolist.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/Todo/TodoActions';

const OPTIONS = { all: 'All', completed: 'Completed', incomplete: 'Incomplete' }

const Todolist = (props) => {

    const [show, setShow] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [options, setOptions] = useState("incomplete");
    const [title, setTitle] = useState("");
    const [selectedDropdown, setSelectedDropdown] = useState("all");

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const handleClose = () => {
        const date = new Date();
        console.log(isCompleted);
        const id = makeid(5);
        const newTodo = {
            id: id,
            title: title,
            date: date.toLocaleDateString(),
            isCompleted: isCompleted
        }

        console.log('newData', newTodo);

        props.addTodo(newTodo);

        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleOptoinChange = (event) => {
        setOptions(event.target.value)
    }

    const handleDropdown = (value) => {
        console.log('dropdown', OPTIONS[value]);
        setSelectedDropdown(value)
    }

    useEffect(() => {

    }, [selectedDropdown]);

    return (<>
        <div className='todo-title'>
            <h5>TODO LIST</h5>
        </div>
        <div className='todo-header col-md-4 offset-4'>
            <div className='header-part'>
                <>
                    <Button variant="primary add-task-btn" onClick={handleShow}>
                        Add Task
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add TODO</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label className='label'>Title</label>
                            <div className=' form-control input-box'>
                                <input type="text" value={title} onChange={handleTitleChange} placeholder="Add task title" />
                            </div>
                            <label className='label'>Status</label>
                            <div className='form-control input-box'>
                                <select name='languages' value={options} onChange={handleOptoinChange}>
                                    <option value='completed' selected>
                                        Completed
                                    </option>
                                    <option value='incomplete'>
                                        Incomplete
                                    </option>
                                </select>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary add-task-btn" onClick={handleClose}>
                                Add Task
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>

            <div className='header-part'>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {OPTIONS[selectedDropdown]}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleDropdown('all')} href="">All</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDropdown('completed')} href="">Completed</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDropdown('incomplete')} href="">Incomplete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    </>
    );
}

const mapStateToProps = (state) => {

}

const mapDispacthToProps = (dispatch) => {
    return {
        addTodo: data => dispatch(addTodo(data))
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(Todolist);
