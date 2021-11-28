class Element {
    constructor(_parent) {
        this.parent = _parent
    }
    tagCreate(_element) {
        const element = document.createElement(_element)
        return (element)
    }
    tagAppend(_element) {
        this.parent === undefined ? document.body.appendChild(_element) : this.parent.appendChild(_element)
    }
    tagAddClass(_addClass) {
        this.element.classList.add(_addClass)
    }
    tagAddText(_addText) {
        this.element.innerText = _addText
    }
    tagAddValue(_addText) {
        this.element.value = _addText
    }
    tagAddPlaceholder(_addText) {
        this.element.placeholder = _addText
    }
    getInputValue() {
        return this.element.value
    }
    clearInputValue() {
        this.element.value = ''
    }
    addListiner(_callback) {
        this.element.addEventListener('click', () => {
            _callback()
        })
    }
    clearList() {
        this.element.innerHTML = ''
    }
    emptyTodoList() {
        const emptyListText = new Paragraph(this.element, 'No list yet in this category')
    }
    createNewList(_value) {
        if (_value === '') {
            alert('Please enter a value')
        } else {
            this.pushValueToList(_value)
            this.render()
        }
    }
    pushValueToList(_value) {
        this.todoList.push(_value)
    }
}