class Todo {
    constructor() {
        this.tasksList = []
        this.modifiedList = []
        this.render()
    }
    render() {
        this.addFormForNewTask()
        this.addListForTasks()
    }
    addFormForNewTask() {
        this.addInputForNewTask()
        this.addButtonForNewTask()
    }
    addInputForNewTask() {
        const input = document.createElement('input')
        document.body.appendChild(input)
    }
    addButtonForNewTask() {
        const input = document.querySelector('input')
        const button = document.createElement('button')
        button.textContent = 'Add task'
        button.addEventListener('click', () => this.addTask(input.value))
        document.body.appendChild(button)
    }
    addListForTasks() {
        const ul = document.createElement('ul')
        ul.innerText = "There are no added tasks in this category"
        document.body.appendChild(ul)
    }
    addTask(value) {
        this.tasksList.push(value)
        this.addTasksList()
    }
    addTasksList() {
        const ul = document.querySelector('ul')
        ul.innerText = ''
        this.tasksList.length === 0 ? ul.innerText = "There are no added tasks in this category" : this.tasksList.forEach((task, index) => {
            const li = document.createElement('li')
            ul.appendChild(li).innerText = task
            li.appendChild(this.removeTaskButton(index))
            li.appendChild(this.markCompleteTaskButton(index))
            li.appendChild(this.markImportantTaskButton(index))
            li.appendChild(this.editTaskButton(index))
        })
        this.clearAddTaskInput()
    }
    clearAddTaskInput() {
        const input = document.querySelector('input')
        input.value = ''
    }
    removeTaskButton(index) {
        const button = document.createElement('button')
        button.innerText = 'X'
        button.addEventListener('click', () => this.removeTask(index))
        return button
    }
    markCompleteTaskButton(index) {
        const button = document.createElement('button')
        button.innerText = '-'
        button.addEventListener('click', () => this.markCompleteTask(index))
        return button
    }
    markImportantTaskButton(index) {
        const button = document.createElement('button')
        button.innerText = '*'
        button.addEventListener('click', () => this.markImportantTask(index))
        return button
    }
    editTaskButton(index) {
        const button = document.createElement('button')
        button.innerText = 'EDIT TASK'
        button.addEventListener('click', () => this.editTask(index))
        return button
    }
    removeTask(index) {
        this.tasksList.splice(index, 1)
        this.addTasksList()
    }
    markCompleteTask(index) {
        const li = document.querySelectorAll('li')[index]
        li.classList.toggle('line-through')
    }
    markImportantTask(index) {
        const li = document.querySelectorAll('li')[index]
        li.classList.toggle('importantTask')
    }
    editTask(index) {
        const li = document.querySelectorAll('li')[index]
        const input = document.createElement('input')
        const buttonCancel = document.createElement('button')
        const buttonOk = document.createElement('button')
        li.innerText = ''
        buttonCancel.innerText = 'Cancel'
        buttonOk.innerText = 'OK'
        li.appendChild(input)
        li.appendChild(buttonCancel)
        li.appendChild(buttonOk)
        buttonOk.addEventListener('click', () => {
            this.tasksList[index] = input.value
            console.log(index, this.tasksList[index])
            this.addTasksList()
        })
        buttonCancel.addEventListener('click', () => {
            this.addTasksList()
        })
    }
}