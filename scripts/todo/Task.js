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