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
    tagAddClass(_setClass) {
        this.element.classList.add(_setClass)
    }
}



// tagText
// tagClass
// tagparent