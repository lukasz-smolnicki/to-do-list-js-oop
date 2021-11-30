class CreateTodo extends Element {
    constructor(_parent, _listName) {
        super(_parent)
        this.tag = 'section'
        this.addElement()
        this.render()
    }
    render() {
        new HeaderPrimary(this.element, 'to-do-list-js-oop')
        this.input = new Input(this.element, 'List name (e.g. shopping list)')
        new Button(this.element, 'Add', this.createNewTodoList.bind(this))
    }
    createNewTodoList() {
        if (this.input.getInputValue() === '') {
            alert('Enter a todo list name')
        } else {
            const inputValue = this.input.getInputValue()
            this.input.clearInputValue()
            this.todo = new Todo(this.element, inputValue)
        }
    }
}
class Todo extends Element {
    constructor(_parent, _listName) {
        super(_parent)
        this.tag = 'article'
        this.addElement()
        this.listName = _listName
        this.render()
    }
    render() {
        new HeaderSecundary(this.element, this.listName)
        this.input = new Input(this.element, 'Task name (e.g. buy milk')
        new Button(this.element, 'Add task', this.addInputValueToList.bind(this))
        this.list = new List(this.element)
    }
    createDate() {
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let hours = today.getHours();
        let minutes = today.getMinutes();
        const year = today.getFullYear();
        if (day < 10) {
            day = `0${day}`;
        }
        if (month < 10) {
            month = `0${month}`;
        }
        if (hours < 10) {
            hours = `0${hours}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        const date = `${year}-${month}-${day} ${hours}:${minutes} `
        return date
    }
    addInputValueToList() {
        let date = this.createDate()
        if (this.input.getInputValue() === '') {
            alert('Enter a value into the text box')
        } else {
            const inputValue = {
                value: this.input.getInputValue(),
                date: date,
                favorite: false,
                done: false
            }
            this.input.clearInputValue()
            this.list.pushValueToList(inputValue)
            this.list.render()
        }
    }
}
class List extends Element {
    constructor(_parent) {
        super(_parent)
        this.tag = 'ul'
        this.taskList = []
        this.addElement()
        this.render()
    }
    pushValueToList(_value) {
        this.taskList.push(_value)
    }
    clearList() {
        this.element.innerHTML = ''
    }
    emptyTaskList() {
        this.element.innerText = 'No tasks'
    }
    render(_list = this.taskList) {
        this.clearList()
        _list.length === 0 ? this.emptyTaskList() : _list.forEach((element, index) => {
            const task = new Task(this.element, element, index, this)
            task.createTask()
        })
    }
}
class Task extends Element {
    constructor(_parent, _elementData, _index, _list) {
        super(_parent)
        this.tag = 'li'
        this.addElement()
        this.elementData = _elementData
        this.index = _index
        this.list = _list
    }
    createTask() {
        const p = new Paragraph(this.element, this.elementData.value)
        const date = new Paragraph(this.element, this.elementData.date)
        if (this.elementData.favorite === true) {
            p.tagAddClass('favorite')
        }
        if (this.elementData.done === true) {
            p.tagAddClass('done')
        }
        const buttonRemove = new Button(this.element, 'Remove', this.removeElementFromList.bind(this))
        const buttonEdit = new Button(this.element, 'Edit task', this.editTask.bind(this))
        const buttonToggleFavorite = new Button(this.element, this.elementData.favorite === true ? 'Remove from favorities' : 'Add to favorities', this.taskToggleFavorite.bind(this))
        const buttonToggleDone = new Button(this.element, this.elementData.done === true ? 'Mark as undone' : 'Mark as done', this.taskToggleDone.bind(this))
    }
    removeElementFromList() {
        this.list.taskList.splice(this.index, 1)
        this.list.render()
    }
    editTask() {
        this.element.innerHTML = ''
        this.input = new Input(this.element, `${this.elementData.value}`)
        const buttonDiscard = new Button(this.element, 'Discard changes', this.discardChanges.bind(this))
        const buttonApply = new Button(this.element, 'Apply changes', this.applyChanges.bind(this))
    }
    discardChanges() {
        this.list.render()
    }
    applyChanges() {
        const inputValue = this.input.getInputValue()
        if (inputValue === '') {
            this.list.render()
        } else {
            this.list.taskList[this.index].value = inputValue
            this.list.render()
        }
    }
    taskToggleFavorite() {
        let favorite = this.list.taskList[this.index].favorite
        this.list.taskList[this.index].favorite = !favorite
        this.list.render()
    }
    taskToggleDone() {
        let done = this.list.taskList[this.index].done
        this.list.taskList[this.index].done = !done
        this.list.render()
    }
}