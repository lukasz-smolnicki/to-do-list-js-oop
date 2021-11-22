class Button extends Component {
    constructor(_setClass, _text) {
        super(_setClass)
        this.text = _text
        this.tag = 'button'
        this.createTag(this.tag)
        this.setText(this.text)
    }
}