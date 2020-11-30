class TextActions {
    setText(text:string) {
        return {type: 'SET_TEXT', payload: text}
    }
}

export default TextActions;