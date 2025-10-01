import "./index.css"
import { Component} from "react"

class PromptInput extends Component{
    onChangeUserInput=(event)=>{
        const {userInput,userInputMethod}=this.props
        userInputMethod(event)
    }
    onSubmiting=(event)=>{
        const {onSubmit}=this.props
        event.preventDefault()
        onSubmit(event)
    }
    render(){
        const {userInput}=this.props
        return(
            <div className="prompt-input-container">
                <form className="prompt-input" onSubmit={this.onSubmiting}>
                    <textarea value={userInput} onChange={this.onChangeUserInput} type="text" className="prompt-input-field" placeholder="Ask GeminiTalk anything..." />
                    <button type="submit" className="prompt-input-button">Submit Message</button>
                </form>
            </div>
        )
    }
}

export default PromptInput