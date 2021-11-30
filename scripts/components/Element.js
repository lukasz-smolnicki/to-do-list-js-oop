class Element {
    constructor(_parent) {
        this.parent = _parent
    }
    addElement() {
        this.element = this.tagCreate(this.tag)
        this.tagAppend(this.element)
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
    tagAddPlaceholder(_addText) {
        this.element.placeholder = _addText
    }
}