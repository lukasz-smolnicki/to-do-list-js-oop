class Input extends Element {
    constructor(_parent, _placeHolder) {
        super(_parent)
        this.tag = 'input'
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
        this.tagAddPlaceholder(_placeHolder)
    }
    getInputValue() {
        return this.element.value
    }
    clearInputValue() {
        this.element.value = ''
    }
}