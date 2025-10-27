import { Component } from "react";

export class ClassCounter extends Component{
    state = {count:0}
    constructor(){
        super()
        console.log("Classcounter constructor() called")
    } // mehtods
    componentDidMount(){
        console.log("ClassCounter.componentDidMount() called")
    }
    componentWillUnmount(){
        console.log("classCounter.componentWillUnmount() called")

    }
    componentDidUpdate(){
        console.log("classCounter.componentDidUpdate() called")

    }
    render(){
        console.log("classCounter.render() called")
        return <div>
            <h3>class Counter</h3>
            <h4>Count = {this.state.count}</h4>
            <button onClick={()=> this.setState({count: this.state.count+1})}>increment</button>
        </div>

    }
}