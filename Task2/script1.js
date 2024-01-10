const list = document.getElementById('list');
const task = document.getElementById('task');

task.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById('b1').click();
    }
});

function add() {
    const taskValue = task.value;

    if (taskValue == '') {
        alert("Please write something!");
        return;
    }

    const li = document.createElement('p');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskText = document.createElement('span');
    taskText.innerText = taskValue;

    li.appendChild(checkbox);
    li.appendChild(taskText);

    const div = document.createElement('div');
    div.classList.add('btns');

    const edit = document.createElement('button');
    edit.innerHTML = 'Edit';
    edit.classList.add('edit');

    const editVal = document.createElement('input');
    editVal.type = 'text';
    editVal.value = taskValue;

    const del = document.createElement('button');
    del.classList.add('del');
    del.innerHTML = 'Delete';

    div.appendChild(edit);
    div.appendChild(del);

    li.appendChild(div);

    list.appendChild(li);

    edit.addEventListener('click', () => {
        if (edit.innerText.toLowerCase() == 'edit') {
            task.value = taskText.innerText;
            task.focus();
            task.select();
            edit.innerText = "Save";
        } else {
            taskText.innerText = task.value;
            task.value = "";
            edit.innerText = "Edit";
        }
    });

    del.addEventListener('click', () => {
        list.removeChild(li);
    });

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskText.style.color = 'green';
            li.style.backgroundColor = 'rgba(144,238,144,0.3)'; 
        } else {
            taskText.style.color = ''; 
            li.style.backgroundColor = '';
        }
    });

    task.value = '';
}
