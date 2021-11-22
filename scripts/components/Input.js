class Input extends Component {
    constructor(_setClass, _text) {
        super(_setClass)
        this.text = _text
        this.tag = 'input'
        this.createTag(this.tag)
        this.setPlaceHolder(this.text)
    }
}