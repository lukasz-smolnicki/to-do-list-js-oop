class CreateTodo extends Element {
    constructor(_parent, _listName) {
        super(_parent)
        this.tag = 'section'
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
        this.render()
    }
    render() {
        this.input = new Input(this.element, 'List name (e.g. shopping list)')
        new Button(this.element, 'Add list', this.createNewTodoList.bind(this))
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