class HeaderPrimary extends Element {
    constructor(_parent, _text) {
        super(_parent)
        this.tag = 'h1'
        this.addElement()
        this.tagAddText(_text)
    }
}
class HeaderSecundary extends Element {
    constructor(_parent, _text) {
        super(_parent)
        this.tag = 'h2'
        this.addElement()
        this.tagAddText(_text)
    }
}
class Paragraph extends Element {
    constructor(_parent, _text) {
        super(_parent)
        this.tag = 'p'
        this.addElement()
        this.tagAddText(_text)
    }
}