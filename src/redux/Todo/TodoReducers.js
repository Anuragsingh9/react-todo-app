import { getTodo } from "./TodoActions";
import { ADD_TODO, HANDLE_POP_UP, UPDATE_CHECKBOX, GET_SINGLE_TODO, CURRENT_TODO_DATA } from "./TodoTypes";

const initialState = {
    todo_list: [
        {
            id: 1,
            isCompleted: true,
            title: "aaaaaff",
            date: "12-09-2022"
        },
        {
            id: 2,
            isCompleted: false,
            title: "bbbttt",
            date: "12-09-2022"
        }
    ],
    handle_pop: false,
    single_todo: null,
    current_todo: "",
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo_list: [...state.todo_list, action.payload]
            }
        case UPDATE_CHECKBOX:
            let data = updateTodo(state, action.payload);
            return {
                ...state,
                todo_list: data
            }
        case HANDLE_POP_UP:
            return {
                ...state,
                handle_pop: action.payload
            }
        case GET_SINGLE_TODO:
            console.log('reducer', action.payload);
            let single_todo_data = findTodo(action.payload, state);
            console.log('reducer1', single_todo_data);
            return {
                ...state,
                single_todo: single_todo_data
            }
        case CURRENT_TODO_DATA:
            return {
                ...state,
                current_todo: action.payload
            }
        default: return state
    }
}

const updateTodo = (state, payload) => {
    return state.todo_list.map((current) => {
        if (current.id == payload[0].id) {
            return {
                ...current,
                ...payload[0],
            }
        } else {
            return current;
        }
    });
}

const findTodo = (id, state) => {
    return state.todo_list.filter((current) => {
        return current.id == id;
    });
}

export default todoReducer;