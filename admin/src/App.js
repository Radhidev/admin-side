import React, { Component } from 'react';
import './App.css';
import Homepage from './Components/HomePage';
import Login from './Components/Login';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:'',
      password:'',
      view:'login'
    }
    this.handleChange= this.handleChange.bind(this)
    }
    handleChange(event){
      this.setState({
        [event.target.name]: event.target.value
      })
    }
    handleview(){
      if (this.state.id==='vamos' && this.state.password==='admin1234'){
        this.setState({view:'homepage'})
      }
    }
    

  render() {
    if(this.state.view==='login'){
      return <Login handleview={this.handleview.bind(this)} 
      id={this.state.id}
      password={this.state.password} 
      data={this.handleChange}/>}
      else if (this.state.view==='homepage'){
        return <Homepage/>
      }
  }
}

export default App;
