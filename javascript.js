// selecting the ui
const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUL = document.getElementById('todos')
const show = document.getElementById('show')
form.addEventListener('submit', function(e){
    addTodo();
    e.preventDefault();
})


function addTodo(){
    let todoText = input.value;
    if(todoText==''){
        alert('enter something');
    }else{
        const todoEL = document.createElement('li');
        todoEL.innerHTML = todoText;
        todoUL.appendChild(todoEL);
        input.value = '';
        todoEL.addEventListener('click', () => {
            todoEL.remove()
        })
        todoEL.addEventListener('click',()=>{
            todoEL.classList.toggle('completed')
        })
        
    }
}