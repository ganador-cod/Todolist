const input = document.getElementById('input');
const button = document.getElementById('adds');
const elUL = document.getElementById('listUL');

button.addEventListener('click',function(e){
    
    addTodo();
    e.preventDefault();
})

function addTodo(){
    let todoText = input.value;
    if(todoText == ''){
        alert('input something')
    }else{
    const elLI = document.createElement('li');
    elLI.textContent = todoText;
    elUL.appendChild(elLI);
    todoText == ''
    // e.preventDefault;
}
}
// addTodo(e)