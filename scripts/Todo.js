class Todo {
    constructor() {
        this.taskList = []
        this.render()
    }
    render() {
        this.addFormForAddingTask()
        this.addListOFTasks()
    }
    addFormForAddingTask() {
        const input = document.createElement('input')
        const button = document.createElement('button')
        button.textContent = 'Add task'
        button.addEventListener('click', () => this.addTask(input.value))
        document.body.appendChild(input)
        document.body.appendChild(button)
    }
    addListOFTasks() {
        const ul = document.createElement('ul')
        document.body.appendChild(ul)
        ul.innerText = 'There are no added tasks in this category'
    }
    addTask(value) {
        const ul = document.querySelector('ul')
        ul.innerText = ''
        this.taskList.push(value)
        this.taskList.forEach(task => {
            const li = document.createElement('li')
            ul.appendChild(li).innerText = task
        })
    }
}