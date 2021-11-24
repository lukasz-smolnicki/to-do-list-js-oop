class Task extends Element {
    constructor(_parent) {
        super(_parent)
        this.tag = 'li'
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
    }
    createTask(_element, _index, _list) {
        const p = new Paragraph(this.element)
        const date = new Paragraph(this.element)
        p.tagAddText(_element.value)
        date.tagAddText(_element.date)
        const button = new Button(this.element)
        button.tagAddText('Remove task')
        button.removeElementFromList(_list, _index)
    }
}