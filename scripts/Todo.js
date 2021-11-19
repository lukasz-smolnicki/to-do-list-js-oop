class Todo {
    constructor() {
        this.taskList = ['Task 1', 'Task 2', 'Task 3']
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
        document.body.appendChild(input)
        document.body.appendChild(button)
    }
    addListOFTasks() {
        const ul = document.createElement('ul')
        document.body.appendChild(ul)
        this.taskList.length === 0 ? ul.innerText = 'There are no added tasks in this category' : this.taskList.forEach(task => {
            const li = document.createElement('li')
            ul.appendChild(li).innerText = task
        })
    }
}