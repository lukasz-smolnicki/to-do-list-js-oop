class Form extends Element {
    constructor(_parent, _action, _placeHolder, _text) {
        super(_parent)
        this.tag = 'form'
        this.placeHolder = _placeHolder
        this.text = _text
        this.action = _action
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
        this.render()
    }
    render() {
        const input = new Input(this.element, this.placeHolder)
        new InputSubmit(this.element, this.text)
        this.element.addEventListener('submit', (e) => {
            e.preventDefault()
            const inputValue = input.getInputValue()
            this.action(inputValue)
            input.clearInputValue()
        })
    }
}
class Input extends Element {
    constructor(_parent, _placeHolder) {
        super(_parent)
        this.tag = 'input'
        this.element = this.tagCreate(this.tag)
        this.tagAddPlaceholder(_placeHolder)
        this.tagAppend(this.element)
    }
}
class InputSubmit extends Element {
    constructor(_parent, _text) {
        super(_parent)
        this.tag = 'input'
        this.element = this.tagCreate(this.tag)
        this.element.type = 'submit'
        this.tagAddValue(_text)
        this.tagAppend(this.element)
    }
}