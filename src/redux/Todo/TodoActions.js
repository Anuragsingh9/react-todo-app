import { ADD_TODO, UPDATE_CHECKBOX,GET_TODO } from "./TodoTypes";

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}

export const updateCheckBox = data => {
    return {
        type: UPDATE_CHECKBOX,
        payload: data
    }
}

export const getTodo = data => {
    return {
        type: GET_TODO,
        payload: data
    }
}