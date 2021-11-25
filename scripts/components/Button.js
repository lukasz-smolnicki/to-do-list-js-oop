class Button extends Element {
    constructor(_parent) {
        super(_parent)
        this.tag = 'button'
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
    }
    addListiner(_callback, _input) {
        this.element.addEventListener('click', () => {
            _callback(_input)
        })
    }
}