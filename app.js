const input = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search');

//list template
const listItem = string => {
    return (`<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${string}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`);
};


//Add todo list item
input.addEventListener('submit', e=>{
    e.preventDefault();
    console.log(input.add.value);
    if(input.add.value.trim()){
    todoList.innerHTML += listItem(input.add.value.trim());
    }
    input.add.value = '';
});


//delete list item
todoList.addEventListener('click', e => {
    console.log(e.target.className);
    if(e.target.className.includes('delete')){
        e.target.parentElement.remove();
    }
});


//filter items from search
const filterTodos = (term) => {
    Array.from(todoList.children)
        .filter(item => !item.textContent.toLowerCase().includes(term))
        .forEach(item => item.classList.add('filtered'));

    Array.from(todoList.children)
        .filter(item => item.textContent.toLowerCase().includes(term))
        .forEach(item => item.classList.remove('filtered'));
};

search.addEventListener('keyup', e=>{
    const term = e.target.value.trim().toLowerCase();
    filterTodos(term);
})



