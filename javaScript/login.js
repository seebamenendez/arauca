import {logout, login} from "./auth.js";
import { insert, getItems, update } from "./firestore.js";
import { getUUID } from "./utils.js";

const buttonLogin = document.getElementById("button-login");
const buttonLogout = document.getElementById("button-logout");
const todoForm = document.querySelector("#todo-form");
const userInfo = document.querySelector("#user-info");
const todoInput = document.querySelector("#todo-input");
const todosContainer = document.getElementById("todos-container");

let currentUser;
let todos = [];

//Para saber si ya hay un usuario loggeado
firebase.auth().onAuthStateChanged( user => {
    if(user){
        currentUser = user;
        console.log("Usuario loggeado", currentUser.displayName);
        init();
    }else{
        console.log("No hay usuario loggeado");
    }
});

//Para autenticarse cuando se le da click
buttonLogin.addEventListener("click", async (e) => {
    try {
        currentUser = await login();
    } catch (error) {
    }
});


buttonLogout.addEventListener("click", (e) => {
    logout();
});

//lo que se escribe lo guarda en la BD
todoForm.addEventListener("submit", e => {
    e.preventDefault();
    const text= todoInput.value;

    if(text =! ''){
        addTodo(text);
        todoInput.value = "";
        loadTodos();
    }
});


async function loadTodos() {
    todosContainer.innerHTML = ``;
    todos = [];
  
    try {
      const response = await getItems(currentUser.uid);
  
      todos = [...response];
      renderTodos();
    } catch (error) {
      console.error(error);
    }
  }


function renderTodos() {
    let html = "";
    todos.forEach((todo)=> {
        html += `
        <li>
            <input type="checkbox" id="${todo.id}" ${todo.completed ? "checked" : ""} />
            <span>${todo.text}</span>
        </li>`;
    });
    todosContainer.innerHTML = html;

    document.querySelectorAll("#todos-container input[type=checkbox]").forEach((checkbox) => {
        checkbox.addEventListener("change", (e) => {
            const id = checkbox.id;
            const todo = todos.find((todo) => todo.id === id);
            todo.completed = checkbox.checked;
            try {
                update(id, todo);
            } catch (error) {
                console.error(error);
            }
        })
    })
}


async function addTodo(text) {
    try {
        const todo = {
            id: getUUID(),
            text: text,
            complete: false,
            userID: currentUser.uid,
        };
        const response = await insert(todo);
    } catch (error) {
        console.error(error);
    }
    
}


buttonLogin.addEventListener("click", async (e) => {
    try {
      currentUser = await login();
      init();
    } catch (error) {
      console.error(error);
    }
  });
  
  buttonLogout.addEventListener("click", (e) => {
    logout();
    //localStorage.removeItem("user");
    buttonLogin.classList.remove("hidden");
    buttonLogout.classList.add("hidden");
    todoForm.classList.add("hidden");
    todosContainer.innerHTML = "";
  });

//Que elementos se muestra y cuales no
function init() {
    buttonLogin.classList.add("hidden");
    buttonLogout.classList.remove("hidden");
    todoForm.classList.remove("hidden");
    

    userInfo.innerHTML = `
    <img src="${currentUser.photoURL}" width="26" />
    <span>${currentUser.displayName}</span>
    `;
    //Cada vez que cargo la pag me trae la info cargada
    loadTodos();
}
