import "./index.css"

const ResponseCard=(props) => {
    const {responseList,isLoading}=props
    console.log(isLoading)
    let isValid=false
    let question=null
    let response=null
    if(responseList.length>=1){
        isValid=true
        let index=(responseList.length)-1
        question=responseList[index].question
        response=responseList[index].response
    }
    return (
        <div className="response-card-container">
            <div className="response-card">
                <h1 className="response-card-heading">GeminiTalk Response</h1>
                {
                    isLoading && (
                        <p className="loading">Loading...</p>
                    )
                }
                {
                    isValid && (
                        <>  <p className="response-card-question"><span className="span">Your asked question: </span>{question}</p>
                            <p className="response-card-response">{response}</p>
                            
                        </>
                    )
                }
            </div>
        </div>
    )
}
export default ResponseCard;
