import "./index.css"
import { Component} from "react"

class PromptInput extends Component{
    render(){
        const {responseList}=this.props
        let isValid=false
        if(responseList.length>=1){
            isValid=true
        }
        return(
            <div className="history-container">
                <div className="history">
                    <div className="past-history">
                        <h1 className="history-heading">History</h1>
                        {
                            isValid && (
                                <ul>
                                    {
                                        responseList.map((each)=>{
                                            return (
                                                <li key={each.question}>{each.question}</li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default PromptInput