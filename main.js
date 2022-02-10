let ToDoButton = document.getElementById('todobutton');
let toDoContainer = document.getElementById('todocontainer');
let inputField = document.getElementById('input');

ToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value ='';
    paragraph.classList.add('p-styling');
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    
})