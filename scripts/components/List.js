class List extends Component {
    constructor(_setClass) {
        super(_setClass)
        this.tag = 'ul'
        this.tasksList = []
        this.displayList = []
        this.selectedElement = this.createTag(this.tag)
        // this.selectedElement = this.selectElement(_setClass)
        this.addNewTask('taskAddButton', 'taskAddInput')
        this.createList(this.tasksList)
    }
    //pomysł: setAction dla kilku nie zależnych list
    createList(list) {
        this.clearList()
        list.length === 0 ? this.emptyTaskList() : list.forEach((element) => {
            new Task('task', element.value, this.selectedElement)
        })

    }
    emptyTaskList() {
        this.selectedElement.innerText = "There is no tasks"
    }
    clearList() {
        this.selectedElement.innerText = ''
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
            this.createList(this.tasksList)
        })
    }
}