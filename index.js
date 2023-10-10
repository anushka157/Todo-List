// var redeclare

// let let can not be redclared in a scope  but value can be reassigned

// const cannot be reasssigned can not be redclared
// 'use strict';
let todoArr = []
todoArr = JSON.parse(atob(localStorage.getItem('todoList')));



function insertTodo() {
    let todoTitle = document.getElementById('todo-title').value
    let todoData = document.getElementById('todo-data').value


    todoArr.push({
        title: todoTitle,
        description: todoData
    })

    // for (let i = 0; i < todoArr.length; i++) {


    // }
    todoInsertion(todoTitle, todoData, (todoArr.length - 1));

    localStorage.setItem('todoList', btoa(JSON.stringify(todoArr)));

}

showTodo();



function showTodo() {
    let containerTodo = document.getElementById('main-continar-todo');
    containerTodo.innerHTML = "";
    if (todoArr.length > 0) {

        for (let i = 0; i < todoArr.length; i++) {
            // containerTodo.insertAdjacentHTML('beforeend',
            //     `<div class="todo-card" id="${'todo-' + i}">
            //     <p>
            //     ${todoArr[i].title}
            //     </p>
            //     <span>
            //     ${todoArr[i].description}
            //     </span>
            //      <div class="my-2">
            //         <button type="button" class="btn btn-outline-primary btn-sm">Update</button>
            //         <button type="button" class="btn btn-outline-danger btn-sm">Delete</button>
            //     </div>
            // </div>`);

            todoInsertion(todoArr[i].title, todoArr[i].description, i);

        }
        // todoArr.forEach((item, index) => {

        // })
    }
}



function todoInsertion(todoTitle, todoData, i) {
    let containerTodo = document.getElementById('main-continar-todo');

    containerTodo.insertAdjacentHTML('beforeend',
        `<div class="todo-card" id="${'todo-' + i}">
            <p>
            ${i+1}. ${todoTitle}
            </p>
            <span>
            ${todoData}
            </span>
             <div class="my-2">
                <button type="button" class="btn btn-outline-primary btn-sm">Update</button>
                <button type="button" class="btn btn-outline-danger btn-sm" onclick="deleteTodo(${i})">Delete</button>
            </div>
        </div>`);
}


function deleteTodo(index) {
    console.log(index);
    // let newTodoArr = todoArr.findIndex((item) =>  item == index );
    // todoArr=todoArr.splice(0, (index+1));
    todoArr = todoArr.filter((item) => item != todoArr[index])
    localStorage.setItem('todoList', btoa(JSON.stringify(todoArr)));
    showTodo();
    // console.log(todoArr, "new");
}

function deleteAll() {
    todoArr = []
    localStorage.setItem('todoList', btoa(JSON.stringify(todoArr)));
    showTodo()
}