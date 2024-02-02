// Functionality addTodo , editTodo , deleteTodo , toggleComplete


import {createContext , useContext} from 'react'

export const TodoContext = createContext({
    // todos[] is just a variable
    // This will only contains the method and the variables
    todos: [
        {
            id :1,
            todo : "Todo msg",
            completed: false,
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id , todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider


