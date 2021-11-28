class HeaderSecundary extends Element {
    constructor(_parent, _text) {
        super(_parent)
        this.tag = 'h2'
        this.element = this.tagCreate(this.tag)
        this.text = _text
        this.tagAddText(this.text)
        this.tagAppend(this.element)
    }
}
class Paragraph extends Element {
    constructor(_parent, _text) {
        super(_parent)
        this.tag = 'p'
        this.element = this.tagCreate(this.tag)
        this.text = _text
        this.tagAddText(this.text)
        this.tagAppend(this.element)
    }
}