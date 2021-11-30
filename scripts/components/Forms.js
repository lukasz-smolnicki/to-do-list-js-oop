class Button extends Element {
    constructor(_parent, _text, _callback) {
        super(_parent)
        this.tag = 'button'
        this.addElement()
        this.addListiner(_callback)
        this.tagAddText(_text)

    }
    addListiner(_callback) {
        this.element.addEventListener('click', () => {
            _callback()
        })
    }
}
class Input extends Element {
    constructor(_parent, _placeHolder, _callback) {
        super(_parent)
        this.tag = 'input'
        this.addElement()
        this.addListiner(_callback)
        this.tagAddPlaceholder(_placeHolder)
    }
    addListiner(_callback) {
        this.element.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                _callback()
            }
        })
    }
    getInputValue() {
        return this.element.value
    }
    clearInputValue() {
        this.element.value = ''
    }
}