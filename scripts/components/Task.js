class Task extends Component {
    constructor(_setClass, _text, _parentElement) {
        super(_setClass)
        this.tag = 'li'
        this.text = _text
        this.parentElement = _parentElement
        this.createTag(this.tag)
        this.setText()
    }
    setText(e) {
        console.log(e)
    }
    createTag(_tagName) {
        const element = document.createElement(_tagName)
        element.classList.add(this.setClass)
        this.parentElement.appendChild(element)
        const selectedElement = document.querySelector(`.${this.setClass}`)
        return (element)
    }
}