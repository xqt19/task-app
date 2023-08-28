import React from 'react'
class Home extends React.Component{
   constructor(){
        super()
        this.state={
            num: 0
        }
   }
   handleClick=(x, op)=>{
        if (op=="add"){
                   this.setState(
                        (prevState)=>{
                            return {num: prevState.num + x}
                        }
                   )
        }
        if (op=="sub"){
                   this.setState(
                        (prevState)=>{
                            return {num: prevState.num - x}
                        }
                   )
        }
        if (op == "reset"){
                   this.setState(
                        {num: 0}
                   )
        }
   }
   render(){
      const numstyle = {fontSize: "100px", padding: "15px 30px"}
      const reset = {backgroundColor: "red", color: "white", fontSize: "16px", padding: "15px 30px", width: "200px"}
      return (
        <div className = "App">
           <Counter amt={1} handleClick={this.handleClick}/>
           <Counter amt={3} handleClick={this.handleClick}/>
           <Counter amt={5} handleClick={this.handleClick}/>
           <span style={numstyle}>{this.state.num}</span><br />
           <div><button style={reset} onClick={()=>{this.handleClick(0,"reset")}}>Reset to Zero </button></div>
        </div>
      );
   }


}

class Counter extends React.Component{
    constructor(){
        super()
    }
    render(){
    const buttonstyle = {backgroundColor: "green", color: "white", fontSize: "16px", padding: "15px 30px", width: "100px"}
    return(
        <div>
             <button style={buttonstyle} onClick={()=> {this.props.handleClick(this.props.amt,"add")}  }>+{this.props.amt}</button>
             <button style={buttonstyle} onClick={()=> {this.props.handleClick(this.props.amt,"sub")}  }>-{this.props.amt}</button>
        </div>
    )}
}


export default Home;