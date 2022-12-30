import { getTodo } from "./TodoActions";
import { ADD_TODO,UPDATE_CHECKBOX } from "./TodoTypes";

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
    ]
}

const todoReducer = (state = initialState, action) => {
    console.log('reducer',action)

    switch (action.type) {
        case ADD_TODO: return {
            ...state,
            todo_list: [...state.todo_list,action.payload]
        }
        case UPDATE_CHECKBOX: 
        let data = updateTodo(state,action.payload);
        console.log('zzzzz',data)
        return {
            ...state,
            todo_list: [...state.todo_list,data]
        }
        // case getTodo: return {
        //     ...state,
        //     todo_list: [...state.todo_list,action.payload]
        // }
        default: return state
    }
}

const updateTodo = (state,payload) => {
    
    const updatedData = state.todo_list.map((current) => {
        if(current.id == payload[0].id){
            current = payload[0];
        }
        return current;
    });
    console.log('ppppp',updatedData);
    return updatedData;

}

export default todoReducer;