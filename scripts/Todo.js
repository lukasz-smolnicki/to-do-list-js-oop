class Todo {
    constructor() {
        this.taskList = []
        this.render()
    }
    render() {
        new Input('taskAddInput', 'Task value')
        new Button('taskAddButton', 'Add task')
        this.addNewTask('taskAddButton', 'taskAddInput')
        this.update()
    }
    update() {
        new List('taskList')
    }
    addNewTask(selectButton, selectInput) {
        const button = document.querySelector(`.${selectButton}`)
        const input = document.querySelector(`.${selectInput}`)
        button.addEventListener('click', () => {
            input.value === '' ? alert('Please enter the task') : this.taskList.push(input.value)
        })
    }

}