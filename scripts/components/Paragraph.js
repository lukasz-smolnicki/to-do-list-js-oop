class Paragraph extends Element {
    constructor(_parent, _text) {
        super(_parent)
        this.tag = 'p'
        this.element = this.tagCreate(this.tag)
        this.text = _text
        this.tagAppend(this.element)
        this.render()
    }
    render() {
        this.tagAddText(this.text)
    }
}