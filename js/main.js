let input = document.getElementById("gettodo");
let addbtn = document.querySelector(".addbtn");

addbtn.addEventListener("click", ()=> {
    let task = input.value;
    let gettask = JSON.parse(localStorage.getItem("tasks")) ?? [];
    gettask.push({
        'todo':task
    })
    localStorage.setItem("tasks",JSON.stringify(gettask));
    console.log(gettask)
    displayTask();
})

let displayTask=()=>{
    let task_display = document.getElementById("task-list");
    let gettask = JSON.parse(localStorage.getItem("tasks")) ?? [];
    let final='';
    gettask.forEach((element,i) => {
        final+=`<li>${element.todo} <i onclick="removetask(${i})" class="fa-solid fa-trash-can"></i></li>`
    })
    task_display.innerHTML=final;
}
displayTask();

function removetask(index) {
    let gettask = JSON.parse(localStorage.getItem("tasks")) ?? [];
    gettask.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(gettask));
    displayTask();
}