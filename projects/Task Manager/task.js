const input = document.getElementById('input')
const taskList = document.getElementById('taskList')
const btn = document.getElementById('btn')

btn.addEventListener('click', taskManager)

function taskManager(){

    let task = input.value
    if(task == ''){
        alert("Task Empty")
    }
    else{

        input.value=''

        const taskContainer = document.createElement('div')
        const para = document.createElement('p')
        const access = document.createElement('div')
        const strike = document.createElement('div')
        const del = document.createElement('div')

        para.innerText = task
        strike.innerText = "Done"
        del.innerText = "Delete"

        taskContainer.className = 'task'
        access.className = 'accessButtons'
        strike.className = 'done'
        del.className = 'delete'
        para.className = 'taskText'

        access.appendChild(strike)
        access.appendChild(del)


        taskContainer.appendChild(para)
        taskContainer.appendChild(access)

        taskList.appendChild(taskContainer)


        strike.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        })

        del.addEventListener('click',()=>{
        taskList.removeChild(taskContainer)
        })
    }
}