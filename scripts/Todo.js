class Todo {
    constructor() {
        this.input = new Input
        this.button = new Button
        this.list = new List
        this.button.tagAddText('Add task')
        this.button.addListiner(this.addInputValueToList.bind(this))
        this.input.tagAddPlaceholder('Task value')
    }
    addInputValueToList() {
        if (this.input.getInputValue() === '') {
            alert('Enter a value into the text box')
        } else {
            const inputValue = {
                value: this.input.getInputValue(),
                date: new Date
            }
            this.input.clearInputValue()
            this.list.pushValueToList(inputValue)
            this.list.render()
        }
    }
}