class List extends Element {
    constructor(_parent) {
        super(_parent)
        this.tag = 'ul'
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
    }
    // createTask() {
    //     const task = new Task(this.element)
    //     task.tagAddText('aaaa')
    //     task.tagAddClass('bbb')
    // }
}