let myForm = document.querySelector('#myForm');
let todoText = document.querySelector('.todo');
let totalCount = document.querySelector('#total-count');
let number = 0;


myForm.addEventListener('submit', function () {
    if (todoText.value != '') {
        let listItem = document.createElement('li');
        listItem.innerHTML = todoText.value;

        let tasksList = document.querySelector('#tasks ul');
        tasksList.appendChild(listItem);

        todoText.value = '';
        number++;

        // set del btn
        var btnDel = document.createElement("button");
        btnDel.textContent = "X";
        listItem.appendChild(btnDel);
        btnDel.addEventListener('click', function () {
            listItem.remove()
            number--
            totalCount.innerHTML = number;
        });

       totalCount.innerHTML = number;
    } else {
        alert('type something ...');
    }
});

