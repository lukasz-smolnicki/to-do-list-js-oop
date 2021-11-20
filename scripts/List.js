class List {
    constructor() {
        this.addFormForNewTask()
        this.addListOFTasks()
        this.task = new Task()
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
        button.addEventListener('click', () => this.task.addTask(input.value))
        document.body.appendChild(button)
    }
    addListOFTasks() {
        const ul = document.createElement('ul')
        document.body.appendChild(ul)
        ul.innerText = 'There are no added tasks in this category'
    }
}