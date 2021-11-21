class Element {
    constructor(_setClass) {
        this.setClass = _setClass
    }
    create(_tagName) {
        const element = document.createElement(_tagName)
        element.classList.add(this.setClass)
        document.body.appendChild(element)
    }
    setText(_text) {
        const element = document.querySelector(`.${this.setClass}`)
        element.innerText = _text
    }
    setPlaceHolder(_text) {
        const element = document.querySelector(`.${this.setClass}`)
        element.placeholder = _text
    }
}
class Button extends Element {
    constructor(_setClass, _text) {
        super(_setClass)
        this.text = _text
        this.tag = 'button'
        this.create(this.tag)
        this.setText(this.text)
    }
}
class Input extends Element {
    constructor(_setClass, _text) {
        super(_setClass)
        this.text = _text
        this.tag = 'input'
        this.create(this.tag)
        this.setPlaceHolder(this.text)
    }
}
class List extends Element {
    constructor(_setClass) {
        super(_setClass)
        this.tag = 'ul'
        this.create(this.tag)
    }
}