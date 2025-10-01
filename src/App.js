import Header from './components/Header';
import PromptInput from './components/PromptInput'; 
import ResponseCard from './components/ResponseCard';
import History from "./components/History"
import './App.css';
import {Component} from "react"
class App extends Component{
  state={
    userInput:"",
    responseList:[],
    isLoading:false
  }
  userInputMethod=(event)=>{
    this.setState({
      userInput:event.target.value
    })
  }
  onSubmit=async (event)=>{
        const {userInput,isLoading}=this.state
        this.setState({
          isLoading:true
        })
        const prompt={
            question:userInput
        }
        let options={
            method:"POST",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify(prompt)
        }
        const url="https://gemini-talk-backend.vercel.app/generate"
        
        try{
            let response=await fetch(url,options)
            let data=await response.json()
            const {responseList}=this.state
            this.setState({
              responseList:[...responseList,data],
              userInput:"",
              isLoading:false
            })
            
        }
        catch(error){
            console.log(error)
        }
    }
  render(){
    const {responseList,userInput,isLoading}=this.state
    
    console.log("testing")
    return(
      <div className="app-container">
        <Header/>
        <PromptInput userInputMethod={this.userInputMethod} userInput={userInput} onSubmit={this.onSubmit}/>
        <ResponseCard isLoading={isLoading} responseList={responseList}/>
        <History responseList={responseList}/>
      </div>
    )
  }
}
export default App;
