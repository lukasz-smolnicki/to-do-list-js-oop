class List extends Element {
    constructor(_parent) {
        super(_parent)
        this.tag = 'ul'
        this.taskList = []
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
        this.render()
    }
    pushValueToList(_value) {
        this.taskList.push(_value)
        console.log(this.taskList)
    }
    render() {
        // this.clearList()
        // this.taskList.length === 0 ? this.emptyTaskList() : this.taskList.forEach((element) => {
        //     new Task()
        // })
    }
}