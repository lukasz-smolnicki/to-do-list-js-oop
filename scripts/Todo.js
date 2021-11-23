class Todo {
    constructor() {
        this.render()
    }
    render() {
        const input = new Input
        const button = new Button
        const list = new List
        button.tagAddText('Add task')
        input.tagAddPlaceholder('Task value')
    }
}