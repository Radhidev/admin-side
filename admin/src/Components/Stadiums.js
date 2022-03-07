import React, { Component } from 'react';
import '../Components/Users.css';


class Stadiums extends Component {
  constructor(props){
    super(props);
  }
  render() {
  return (
      <div>
<section>
    <div className="container">
    	<div className="row">	
    		<div className="col-md-4 mt-4">
    		    <div className="card profile-card">
    		        <div className="card-img-block">
    		            <img className="card-img-top" src="https://populous.com/wp-content/uploads/2018/01/Tottenham-hotspur-stadium-hero-1504x846.jpg" alt="Card image cap"/>
    		        </div>
                    <div className="card-body pt-0">
                    <h5 className="card-title">stade le prince</h5>
                    <a href="#" className="btn btn-danger">Delete Stadium</a> <a href="#" className="btn btn-primary">Update Stadium</a>
                  </div>
                </div>
    		</div>
    	</div>
    </div>
</section>
      </div>
  )}
}


export default Stadiums;
