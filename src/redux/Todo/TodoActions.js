import { ADD_TODO, UPDATE_CHECKBOX, GET_SINGLE_TODO, HANDLE_POP_UP, CURRENT_TODO_DATA } from "./TodoTypes";

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
        type: GET_SINGLE_TODO,
        payload: data
    }
}

export const handlePopUp = data => {
    return {
        type: HANDLE_POP_UP,
        payload: data
    }
}
export const currentTodoData = data => {
    return {
        type: CURRENT_TODO_DATA,
        payload: data
    }
}