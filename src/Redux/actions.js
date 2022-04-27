// Actions

export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";


// Action creators

const addTodo = (title) => {
    return {
        type: ADD_TODO,
        payload:{title}
    };
}

const deleteTodo = (id) => {
    return {
        type: DEL_TODO,
        payload : {id}
    }
}

const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload :{id}
    }
}

export {addTodo,deleteTodo,toggleTodo};