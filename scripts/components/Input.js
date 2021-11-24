class Input extends Element {
    constructor(_parent) {
        super(_parent)
        this.tag = 'input'
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
    }
    getInputValue() {
        return this.element.value
    }
    clearInputValue() {
        this.element.value = ''
    }
}