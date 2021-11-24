class Button extends Element {
    constructor(_parent) {
        super(_parent)
        this.tag = 'button'
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
    }
    addInputValueToList(_input, _list) {
        this.element.addEventListener('click', () => {
            if (_input.getInputValue() === '') {
                alert('Enter a value into the text box')
            } else {
                const inputValue = {
                    value: _input.getInputValue(),
                    date: new Date
                }
                _input.clearInputValue()
                _list.pushValueToList(inputValue)
                _list.render()
            }
        })
    }
    removeElementFromList(_list, _index) {
        this.element.addEventListener('click', () => {
            _list.splice(_index, 1)
            _list.render()
        })
    }
}