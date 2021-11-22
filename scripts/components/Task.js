class Task extends Component {
    constructor(_setClass, _value) {
        super(_setClass)
        this.tag = 'li'
        this.create(this.tag)
        this.setText(this.text)
    }
}