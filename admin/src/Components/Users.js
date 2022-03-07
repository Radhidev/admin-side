import React, { Component } from 'react';
import '../Components/Users.css';

class Users extends Component {
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
    		            <img className="card-img-top" src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/10/15/152341.jpg" alt="Card image cap"/>
    		        </div>
                    <div className="card-body pt-0">
                    <h5 className="card-title">Ons Jabeur</h5>
                    <a href="#" className="btn btn-danger">Delete Account</a>
                  </div>
                </div>
    		</div>
    	</div>
    </div>
</section>
</div>
  )}
}


export default Users;
