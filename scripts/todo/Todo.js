class CreateTodo extends Element {
    constructor(_parent, _listName) {
        super(_parent)
        this.tag = 'section'
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
        this.todoList = []
        this.render()
    }
    render() {
        this.clearList()
        new Form(this.element, this.createNewList.bind(this), 'List name (e.g. shopping list)', 'Add list')
        this.todoList.length === 0 ? this.emptyTodoList() : this.todoList.forEach((element, index) => {
            const todo = new Todo(this.element, element)
        })
    }
}
class Todo extends Element {
    constructor(_parent, _listName) {
        super(_parent)
        this.tag = 'article'
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
        this.listName = _listName
        this.render()
    }
    render() {
        new HeaderSecundary(this.element, this.listName)
        this.input = new Input(this.element, 'Task name (e.g. buy milk')
        new Button(this.element, 'Add task', this.addInputValueToList.bind(this))
        this.list = new List(this.element)
    }
    addInputValueToList() {
        if (this.input.getInputValue() === '') {
            alert('Enter a value into the text box')
        } else {
            const inputValue = {
                value: this.input.getInputValue(),
                date: new Date,
                favorite: false,
                editDate: false,
                numberOfEdits: 0,
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
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
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
        this.element = this.tagCreate(this.tag)
        this.elementData = _elementData
        this.index = _index
        this.list = _list
        this.tagAppend(this.element)
    }
    createTask() {
        const p = new Paragraph(this.element, this.elementData.value)
        const date = new Paragraph(this.element, this.elementData.date)
        if (this.elementData.favorite === true) {
            p.tagAddClass('favorite')
        }
        const buttonRemove = new Button(this.element, 'Remove task', this.removeElementFromList.bind(this))
        const buttonEdit = new Button(this.element, 'Edit task', this.editTask.bind(this))
        const buttonToggleFavorite = new Button(this.element, this.elementData.favorite === true ? 'Remove from favorities' : 'Add to favorities', this.taskToggleFavorite.bind(this))
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
}