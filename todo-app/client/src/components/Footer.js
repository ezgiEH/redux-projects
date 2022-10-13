import React from 'react'

function Footer() {
    return (
        <footer className="info">
            <p>Click to edit a todo</p>
            <p>Created by <a href="https://github.com/ezgiEH">Ezgi Hocaoğlu</a></p>
            <p>Part of <a href="https://github.com/ezgiEH/redux-projects/tree/main/todo-app">Todo App</a></p>
        </footer>
    )
}

export default React.memo(Footer)