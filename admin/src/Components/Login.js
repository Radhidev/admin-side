import React, { Component } from 'react';
import '../Components/Login.css';

class Login extends Component {
  constructor(props){
    super(props);
  }
  render() {
  return (
    <div className="wrapper fadeInDown">
  <div id="formContent">
    
    <form>
      <input type="text" id="login" className="fadeIn second" name="id" placeholder="id" value={this.props.id} onChange={this.props.data}/>
      <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" value={this.props.password} onChange={this.props.data}/>
      <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.props.handleview}/>
    </form>

  </div>
</div>
  )}
}


export default Login;
