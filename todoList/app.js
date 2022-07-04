let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// btn activate

input.addEventListener('keyup' , ()=> {
    if(input.value.trim() != 0){
        addBtn.classList.add('active');
    }
})

// add new item

addBtn.addEventListener('click' , ()=>{
    if (input.value.trim() !=0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = '';
    }else{
        alert('please enter a task');
    }
})

// delete item

tasks.addEventListener('click' , (e) => {
    if (e.target.classList.contains("fa-xmark")) {
        e.target.parentElement.parentElement.remove();
    }
})

// mark as completed

tasks.addEventListener('click' , (e) => {
    if (e.target.classList.contains('fa-pen-to-square')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})
