class Todo {
    constructor() {
        this.render()
    }
    render() {
        this.addFormForAddingTask()
    }
    addFormForAddingTask() {
        const input = document.createElement('input')
        const button = document.createElement('button')
        button.textContent = 'Add task'
        document.body.appendChild(input)
        document.body.appendChild(button)
    }
}