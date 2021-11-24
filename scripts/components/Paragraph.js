class Paragraph extends Element {
    constructor(_parent) {
        super(_parent)
        this.tag = 'p'
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
    }
}