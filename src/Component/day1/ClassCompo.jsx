import React, {Component} from "react";

class Counter extends Component {
    constructor(){
        super();
        this.state={
            count: 0
        }

    }

    componentDidMount(){
        console.log("ComponentDidMount : When component redner or load first time");
    }

    Increment(){
        this.setState({ count: this.state.count+1})
    }

    Decrement(){
        this.setState({ count: this.state.count -1})
    }
    render(){
        return(
            <div>
                <Counter number = {this.state.count}></Counter>
                <button onClick={()=> {this.Increment()}}>Increment</button>
                <button onClick={()=> {this.Decrement()}}>Decrement</button>

            </div>
        )
    }
}

export default Counter;