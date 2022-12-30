import React from 'react';
import Item from './item';
import { connect } from 'react-redux';

const ItemsWrapper = (props) => {
    return (
        <div className='item-wrapper col-md-4 offset-4'>
            {props.todo_list && props.todo_list.map((todoData) => (
                <Item todoData={todoData} key={todoData.id} />
            ))}
        </div>
    );
}

const mapDispacthToProps = () => {
    return {

    }
}

const mapStateToProps = (state) => {
    return {
        todo_list: state.todo_list
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(ItemsWrapper);
