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