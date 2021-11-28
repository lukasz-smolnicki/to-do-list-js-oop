class Button extends Element {
    constructor(_parent, _text, _callback) {
        super(_parent)
        this.tag = 'button'
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
        this.addListiner(_callback)
        this.tagAddText(_text)
        // this.render()
    }
    addListiner(_callback) {
        this.element.addEventListener('click', () => {
            _callback()
        })
    }
}