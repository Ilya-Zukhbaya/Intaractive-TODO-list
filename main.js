const todoSchedule = document.querySelector('.ToDoSchedule')
const todoForm = document.querySelector('.ToDoForm-container')
const todoInput = document.querySelector('#Get-Task-Text')

todoForm.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault(); // Отмена стандартного поведения
    
    const textInput = todoInput.value

    const newTask = document.createElement('li')
    newTask.className = 'ToDo-Task'

    newTask.innerText = textInput

    const addButton = document.createElement('button')

    addButton.setAttribute('role', 'button')
    addButton.className = 'completeText'
    addButton.innerText = 'Completed'

    const deleteButton = document.createElement('button')

    deleteButton.setAttribute('role', 'button')
    deleteButton.className = 'removedText'
    deleteButton.innerText = 'Remove'

    newTask.append(addButton)
    newTask.append(deleteButton)
    todoSchedule.append(newTask)

    todoInput.value = null
    todoInput.focus()
}