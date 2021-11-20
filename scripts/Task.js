class Task {
    constructor() {
        this.taskList = []
    }
    addTask(value) {
        const ul = document.querySelector('ul')
        ul.innerText = ''
        this.taskList.push(value)
        this.taskList.forEach(task => {
            const li = document.createElement('li')
            ul.appendChild(li).innerText = task
            ul.appendChild(this.removeTaskButton())
        })
        this.clearAddTaskInput()
    }
    clearAddTaskInput() {
        const input = document.querySelector('input')
        input.value = ''
    }
    removeTaskButton() {
        const button = document.createElement('button')
        button.innerText = 'X'
        button.addEventListener('click', () => this.removeTask())
        return button
    }
    removeTask() {
        console.log('click')
    }
}