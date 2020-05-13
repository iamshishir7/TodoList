const addtodo = document.querySelector('.add');
const searchtodo = document.querySelector('.search input');
const todolists = document.querySelector ('ul')


const newtemplate = (newtodo) => {
    html = `
            <li>
                <span>${newtodo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
            `
    todolists.innerHTML += html;
}

addtodo.addEventListener('submit',e => {
    e.preventDefault();
    const newtodo = addtodo.add.value.trim();
    if (newtodo.length) {
        newtemplate(newtodo);
        addtodo.reset();
    }
    if (todolists.innerHTML.includes('li')) {
        document.querySelector('.welcome').innerHTML = `<span> Your todos are listed below.</span>`;
        } else {
            document.querySelector('.welcome').innerHTML = `<span> Get started by entering your Todos below.</span>`;
        }
    
});

todolists.addEventListener('click',e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
    if (todolists.innerHTML.includes('li')) {
        document.querySelector('.welcome').innerHTML = `<span> Your todos are listed below.</span>`;
        } else {
            document.querySelector('.welcome').innerHTML = `<span> Get started by entering your Todos below.</span>`;
        }
});

const searching = (term) => {
    Array.from(todolists.children)
    .filter(todo => !todo.textContent.includes(term))
    .forEach(todo => todo.classList.add('donotdisplay'));

    Array.from(todolists.children)
    .filter(todo => todo.textContent.includes(term))
    .forEach(todo => todo.classList.remove('donotdisplay'));

    
}

searchtodo.addEventListener ('keyup', () => {
    const term = searchtodo.value.trim();
    searching(term);
});

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
})

