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