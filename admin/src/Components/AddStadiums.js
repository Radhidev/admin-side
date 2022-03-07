import React, { Component } from 'react';



class AddStadiums extends Component {
  constructor(props){
    super(props);
  }
  render() {
  return (
      <div>
        <input placeholder='stadium name'></input><br/>
        <input placeholder='stadium owner name'></input><br/>
        <input type='number' placeholder='contact'></input><br/>
        <input type='number' placeholder='city'></input><br/>
        <input placeholder='lat'></input><input placeholder='lng'></input><br/>
        <input placeholder='image' ></input><input type="file"/><br/>
        <button type="button" class="btn btn-primary btn-lg">Confirm information</button>
        
{/* image-stadium name-stadium owner information- lat leng */}
      </div>
  )}
}


export default AddStadiums;