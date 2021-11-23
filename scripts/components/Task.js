class Task extends Element {
    constructor(_parent) {
        super(_parent)
        this.tag = 'li'
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
    }
}