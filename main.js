const todoSchedule = document.querySelector('.ToDoSchedule')
const todoForm = document.querySelector('.ToDoForm-container')
const todoInput = document.querySelector('#Get-Task-Text')
const completedTasks = document.querySelector('.CompletedTasks-list')

todoForm.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault(); // Отмена стандартного поведения
    
    const textInput = todoInput.value

    const newTask = document.createElement('li')
    
    newTask.className = 'ToDo-Task'
    newTask.innerText = textInput

    const addButton = document.createElement('button')

    addButton.addEventListener('click', function(){
        completedTasks.append(this.closest('li'))
        addButton.remove()
        deleteButton.remove()
    })
    addButton.setAttribute('role', 'button')
    addButton.className = 'completeText'
    addButton.innerText = 'Completed'

    const deleteButton = document.createElement('button')

    deleteButton.setAttribute('role', 'button')
    deleteButton.className = 'removedText'
    deleteButton.innerText = 'Remove'
    deleteButton.addEventListener('click', function() {this.closest('li').remove()})

    newTask.append(addButton)
    newTask.append(deleteButton)
    todoSchedule.append(newTask)

    todoInput.value = null
    todoInput.focus()
}
