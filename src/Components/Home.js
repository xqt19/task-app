import React from 'react'
class Home extends React.Component{
   constructor(){
        super()
        this.state={
            num: 0
        }
   }
   handleClick=(x)=>{
           this.setState(
                (prevState)=>{
                    return {num: prevState.num + x}
                }
           )
   }
   render(){
      const numstyle = {fontSize: "100px", padding: "15px 30px"}
      return (
        <div className = "App">
            <span style={numstyle}>{this.state.num}</span><br />
           <Counter add={1} handleClick={this.handleClick}/>
           <Counter add={3} handleClick={this.handleClick}/>
           <Counter add={5} handleClick={this.handleClick}/>
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
             <button style={buttonstyle} onClick={()=> {this.props.handleClick(this.props.add)}  }>+{this.props.add}</button>
        </div>
    )}
}


export default Home;