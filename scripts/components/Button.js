class Button extends Element {
    constructor(_parent) {
        super(_parent)
        this.tag = 'button'
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
    }
    addTaskToList(_input, _target) {
        this.element.addEventListener('click', () => {
            if (_input.getInputValue() === '') {
                alert('Enter a value into the text box')
            } else {
                const inputValue = _input.getInputValue()
                _input.clearInputValue()
                _target.pushValueToList(inputValue)
            }
        })
    }
}