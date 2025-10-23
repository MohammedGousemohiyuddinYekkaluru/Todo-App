const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const addBtn = document.querySelector('.addBtn');

function AddTask(){
    if(inputBox.value === ''){
        alert('You must write something');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let delBtn = document.createElement('button');
        delBtn.innerHTML = '❌';
        li.appendChild(delBtn);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();

addBtn.addEventListener('click', AddTask);
inputBox.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter') AddTask();
})