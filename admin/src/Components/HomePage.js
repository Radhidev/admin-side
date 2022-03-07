import React, { Component } from 'react';
import '../Components/HomePage.css';
import Users from './Users';
import Stadiums from './Stadiums';
import AddStadiums from './AddStadiums';
import Reports from './Reports';

class Homepage extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: this.items
    }
    this.items = []
    this.handleall = this.handleall.bind(this)
  }
handleall(e){
    this.setState({view: 'Users'})
    this.items.shift()
    if(e.target.name==='Users'){
        this.items.push(<Users key={0} />)
    }
    else if(e.target.name==='Stadiums'){
      this.items.push(<Stadiums key={0}/>)
    }
    else if(e.target.name==='AddStadiums'){
      this.items.push(<AddStadiums key={0}/>)
    }
    else if(e.target.name==='vamos'){
      this.items=[]
    }
    else if(e.target.name==='Reports'){
      this.items.push(<Reports/>)
    }
}

  render() { 
  return (
    <div> 
  <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#" name="vamos" onClick= {(e)=>{this.handleall(e)}} >Vamos</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fa fa-superpowers" aria-hidden="true">
          </i>
          Admin
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#" name='Users' onClick= {(e)=>{this.handleall(e)}} ><i className="fa fa-user-circle" aria-hidden="true">
          </i>Users</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#" name='Stadiums' onClick= {(e)=>{this.handleall(e)}} ><i className="fa fa-bars" aria-hidden="true">
          </i>Stadiums</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#" name='AddStadiums' onClick= {(e)=>{this.handleall(e)}} ><i className="fa fa-plus-square" aria-hidden="true">
          </i>Add Stadiums</a>
        </div>
      </li>
    </ul>
    <ul className="navbar-nav ">
      <li className="nav-item">
        <a className="nav-link" href="#" name='Reports' onClick= {(e)=>{this.handleall(e)}}>
          <i className="fa fa-globe">
            <span className="badge badge-danger">11</span>
          </i>
          Reports
        </a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
{this.items[0]}
</div>
  )} 
}

export default Homepage;
