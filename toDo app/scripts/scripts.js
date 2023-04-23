let myForm = document.querySelector('#myForm');
let todoText = document.querySelector('.todo');
let number = 0;


myForm.addEventListener('submit', function(){
    if(todoText.value != ''){
        let listItem = document.createElement('li');
        listItem.innerHTML = todoText.value;

        let tasksList = document.querySelector('#tasks ul');
        tasksList.appendChild(listItem);

        todoText.value = '';
        // number = number + 1;
        number++;
        console.log('total tasks are: ' + number);
        document.querySelector('#total-count').innerHTML = number;
    }else{
        alert('type something ...');
    }
});

