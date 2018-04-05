import React, { Component } from 'react';
import axios from 'axios';

class Getdata extends Component{
    constructor(){
        super();
        this.state={
            dataUser:[]
        }
      }
      klik(){
        axios.get('http://localhost:3001/api/players').then((ambilData) => {
            console.log(ambilData);
            this.setState({
                dataUser: ambilData.data,
            });
          });
      }

      hapus(){
          axios.delete('http://localhost:3001/api/players').then((deleteData) => {
              console.log(deleteData);
              this.setState({
                  dataUser: deleteData.id,
              });
          });
      }
 
      render(){
            const data = this.state.dataUser.map((item, index) => {
            var name = item.Name;
            var ages = item.Ages;
            var handicaps = item.HandiCaps;
            var location = item.Location;
            var id = item.id;
            return <tr>
                <td key={index}>{name}</td>
                <td key={index}>{ages}</td>
                <td key={index}>{handicaps}</td>
                <td key={index}>{location}</td>
                <td key={index}><button type="submit" ref="del" className="btn btn-danger" 
                onClick={()=>{this.hapus();}}>Delete</button></td></tr>;
          })
          return(
              

<div className="container">
        <div className="modal" id="lin_Modal">

            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button className="close" data-dismiss="modal">X</button>
                        <h3 className="modal-title">List Player</h3>
                    </div>
            
                    <div className="modal-body">
                    <br/>     
                <button type="submit" className="btn btn-primary" onClick={()=>{this.klik();}}>Show data</button>
                <br />
                <br />
                <table className="table">
                <br />   
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Ages</th>
                            <th scope="col">HandiCaps</th>
                            <th scope="col">Location</th>
                        </tr>
                   
                    <tbody>
                        {data}
                    </tbody>
                </table> 
                    </div>

                </div>
            </div>

        </div>
    <a href="#" data-toggle="modal" data-target="#lin_Modal"><h1>List Data!</h1></a>
    </div>
 )
}
}
export default Getdata;