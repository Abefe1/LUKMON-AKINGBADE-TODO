"use strict";
window.onload;
let btn = document.getElementById('add');
let list = document.getElementById('display');
let taskList = [];
btn.addEventListener('click', function addTask() {
    let inputT = document.getElementById('input');
    if (inputT.value === '' || inputT.value === null) {
        prompt("Field can't be blank");
    }
    else
        (taskList.push(inputT.value));
    if (list.childElementCount >= 0) {
        list.replaceChildren();
    }
    for (let i = 0; i < taskList.length; i++) {
        let li = document.createElement('li');
        li.innerText += taskList[i];
        let edit = document.createElement("button");
        edit.innerText = "EDIT";
        let del = document.createElement("button");
        del.innerText = "DELETE";
        list.appendChild(li);
        li.appendChild(edit);
        li.appendChild(del);
        del.onclick = function () {
            list.removeChild(li);
            taskList.splice(i, 1);
        };
        edit.onclick = function () {
            inputT.value = taskList[i];
            let save = document.createElement("button");
            save.innerText = "SAVE";
            li.replaceChild(save, edit);
            save.onclick = function () {
                taskList[i] = inputT.value;
                li.innerText = taskList[i];
                li.appendChild(edit);
                li.appendChild(del);
                inputT.value = '';
            };
        };
    }
    inputT.value = '';
});
