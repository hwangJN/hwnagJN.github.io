const login_FORM = document.querySelector("#login-form");
const TODO = document.getElementById("TODO");
const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");


let toDos = [];

const TODOS_KEY = "todos";

//toDos array를 이용한 localStorage 업데이트
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify : a,b,c --> "["a","b","c"]"
}



function deleteToDo(event){
    const li = event.target.parentElement; // 이벤트의 부모 Element 찾기

    //html에서 제거 
    li.remove();

    // toDos 리스트에서 id를 이용한 제거 // toDos.id 는 number, li.id는 String (typeof li.id를 통해 확인)
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //함수 대신 처리 방법 // filter 는 새 리스트를 만듬(return 값이 true 인 item만 필터링)


    saveToDos() //중요! localStorage 업데이트 필요
}

function paintToDo(newTodo){

    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    console.log("우왕");
    TODO.classList.remove("hidden");

    const newTodo= todoInput.value;
    const newTodoObj={
        text : newTodo,
        id : Date.now(),
    };
    
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    todoInput.value = "";
    saveToDos();
}

const name_key = "username";
const savename = localStorage.getItem(name_key);
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savename === null){
    login_FORM.addEventListener("submit", handleToDoSubmit);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if(savedToDos!== null){
    const parsedToDos = JSON.parse(savedToDos); // JSON.parse : ["a","b","c"]
    //parsedToDos.forEach(sayHello); //함수 대신 parsedToDos.forEach((item) => console.log(item)); 이렇게 해도 됨/
    console.log(parsedToDos);
    toDos = parsedToDos;  //새로고침 할때마다 array가 사라지는 것을 막아줌
    TODO.classList.remove("hidden");
    parsedToDos.forEach(paintToDo); //각각 item을 화면에 표시
}
else{
    console.log("NULL!!!");
}
