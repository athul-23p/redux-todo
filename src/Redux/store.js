import { legacy_createStore as createStore } from "redux";
import { todoReducer } from "./reducer";

export const store = createStore(todoReducer,{todos: []});

// store.subscribe(() => {console.log('store update',store.getState())})