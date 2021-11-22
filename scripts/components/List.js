class List extends Component {
    constructor(_setClass, _action) {
        super(_setClass)
        this.tag = 'ul'
        this.tasksList = []
        this.displayList = []
        this.selectedElement = this.createTag(this.tag)
        // this.selectedElement = this.selectElement(_setClass)
        this.addNewTask('taskAddButton', 'taskAddInput')
        this.render()
    }
    render() {
        this.tasksList.length === 0 ? this.emptyTaskList() : this.tasksList.forEach(element => {
            console.log(element)
        })

    }
    update(filteredList) {
        filteredList.length === 0 ? this.emptyTaskList() : this.tasksList.forEach(element => {
            console.log(element)
        })

    }
    createTaskList() {
        this.displayList.forEach(element => {
            console.log(element)
        })
    }
    emptyTaskList() {
        this.selectedElement.innerText = "There is no tasks"
    }
    addNewTask(selectButton, selectInput) {
        const button = document.querySelector(`.${selectButton}`)
        const input = document.querySelector(`.${selectInput}`)
        button.addEventListener('click', () => {
            input.value === '' ? alert('Please enter the task') : this.tasksList.push({
                value: input.value,
                date: new Date
            })
            input.value = ''
            this.render()
        })

    }
}