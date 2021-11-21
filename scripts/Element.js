class Element {
    constructor(_setClass) {
        this.setClass = _setClass
    }
    create(_tagName) {
        const element = document.createElement(_tagName)
        element.classList.add(this.setClass)
        document.body.appendChild(element)
    }
    setText(_text) {
        const element = document.querySelector(`.${this.setClass}`)
        element.innerText = _text
    }
    setPlaceHolder(_text) {
        const element = document.querySelector(`.${this.setClass}`)
        element.placeholder = _text
    }
}
class Button extends Element {
    constructor(_setClass, _text) {
        super(_setClass)
        this.text = _text
        this.tag = 'button'
        this.create(this.tag)
        this.setText(this.text)
    }
}
class Input extends Element {
    constructor(_setClass, _text) {
        super(_setClass)
        this.text = _text
        this.tag = 'input'
        this.create(this.tag)
        this.setPlaceHolder(this.text)
    }
}
class List extends Element {
    constructor(_setClass, _action) {
        super(_setClass)
        this.tag = 'ul'
        this.tasksList = []
        this.create(this.tag)
        this.addNewTask('taskAddButton', 'taskAddInput')
        this.render()
    }
    render() {
        this.tasksList.length === 0 ? this.emptyTaskList() : this.tasksList.forEach(element, () => {
            console.log('element')
        })

    }
    emptyTaskList() {
        const tasksList = document.querySelector(`.taskList`)
        tasksList.innerText = "There is no tasks"
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
class Task extends Element {
    constructor(_setClass, _value) {
        super(_setClass)
        this.tag = 'li'
        this.create(this.tag)
        this.setText(this.text)
    }
}