import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Getdata from './Getdata';
class App extends Component {


    constructor() {
      super();
      this.state = {
        nm : '',
        ag : '',
        hc : '',
        lct: ''
      }
    }
    klikaja() {
      this.setState({nm:this.refs.name.value, ag:this.refs.ages.value, hc:this.refs.handicaps.value, lct:this.refs.location.value})
    }
    componentWillUpdate(x,y) {
      var data={
      Name:y.nm,
      Ages:y.ag,
      HandiCaps:y.hc,
      Location:y.lct
    }
    console.log(data);
      axios.post('http://localhost:3001/api/players',data).then((res)=>{
        console.log("Response server :",res)
      })
  }
  render() {
    return (
      
      <div className="container">
      <form>
      <center>
      <h3>Form Tampilan Data Input</h3>
            <div className="form-group">
            <label htmlFor="exampleInputName">Name :</label>
            <input type="text" className="form-control" ref="name" id="exampleInputName" placeholder="Name"/>
            </div>
            <br/>
            <div className="form-group">
            <label htmlFor="exampleInputAges">Ages :</label>
            <input type="number" className="form-control" ref="ages" id="exampleInputAges" placeholder="Ages"/>
            </div>
            <br/>
            <div className="form-group">
            <label htmlFor="exampleInputHandicaps">HandiCaps :</label>
            <input type="number" className="form-control" ref="handicaps" id="exampleInputHandiCaps" placeholder="HandiCaps"/>
            </div>
            <br/>
            <div className="form-group">
            <label htmlFor="exampleInputLocation">Location :</label>
            <input type="text" className="form-control" ref="location" id="exampleInputLocation" placeholder="Location"/>
            </div>
            <br/>
          <button type="submit" className="btn btn-primary"onClick={()=>{this.klikaja();}}>Post data</button>
          </center> 
        </form> 
         <br/>
         <center>
        <Getdata />
        </center>
      </div>
      
    );
  }
}
export default App;