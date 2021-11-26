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
        const p = new Paragraph(this.element)
        const date = new Paragraph(this.element)
        p.tagAddText(this.elementData.value)
        console.log(this.elementData)
        if (this.elementData.favorite === true) {
            p.tagAddClass('favorite')
        }
        date.tagAddText(this.elementData.date)
        const buttonRemove = new Button(this.element)
        buttonRemove.tagAddText('Remove task')
        buttonRemove.addListiner(this.removeElementFromList.bind(this))
        const buttonEdit = new Button(this.element)
        buttonEdit.tagAddText('Edit task')
        buttonEdit.addListiner(this.editTask.bind(this))
        const buttonToggleFavorite = new Button(this.element)
        if (this.elementData.favorite === false) {
            buttonToggleFavorite.tagAddText('Add to favorities')
        } else {
            buttonToggleFavorite.tagAddText('Remove from favorities')
        }

        buttonToggleFavorite.addListiner(this.taskToggleFavorite.bind(this))
    }
    removeElementFromList() {
        this.list.taskList.splice(this.index, 1)
        this.list.render()
    }
    editTask() {
        this.element.innerHTML = ''
        const input = new Input(this.element)
        const buttonDiscard = new Button(this.element)
        const buttonApply = new Button(this.element)
        buttonDiscard.tagAddText('Discard changes')
        buttonDiscard.addListiner(this.discardChanges.bind(this))
        buttonApply.tagAddText('Apply changes')
        buttonApply.addListiner(this.applyChanges.bind(this), input)
        input.tagAddPlaceholder(`${this.elementData.value}`)
    }
    discardChanges() {
        this.list.render()
    }
    applyChanges(_input) {
        const inputValue = _input.getInputValue()
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