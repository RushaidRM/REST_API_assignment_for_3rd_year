import React, { Component } from "react";
import logo from './logo.svg';
import {Link } from "react-router-dom";
import './App.css';

 
class App extends Component{

  constructor(props) {

    super(props);

    this.handlechangefrom =  this.handlechangefrom.bind(this);
    this.handlechangetogo = this.handlechangetogo.bind(this);
    this.handlechangequantity = this.handlechangequantity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    this.state = {
      from: " ",
      togo: " ",
      quantity: " ",
    
      formErrors:{
        
      }
        }
    }
    handlechangefrom = e =>{
       // e.preventDefault();
        this.setState({
            from : e.target.value
        })
  
    }

    handlechangeto = e =>{
      // e.preventDefault();
       this.setState({
        togo: e.target.value
       })
 
   }

   handlechangequantity = e =>{
    // e.preventDefault();
     this.setState({
      quantity: e.target.value
     })

 }

    handleSubmit = e => {
        e.preventDefault();
       // console.log(this.state) 



      const newData = {
           from : this.state.from,
            togo : this.state.togo,
            quantity: this.state.quantity
        
      };

       axios.post("http://localhost:3000/api/booking", newData)
       .then(res => {
           console.log(res.data)
       })

       this.setState({
          from : " ",
           to  : " ",
           quantity: ""
    })

    }

    render() {
        return(
       
            
      	  <div className="row "  style={{marginTop:"20px",marginLeft:"10px"}}>
 
       <form>
          <i className="form-horizontal">Train Ticket Reservation</i>
          
          <input id="" 
		  type="text"  
		  id="from" 
		  className="form-control " 
		  placeholder="From" 
		  style = {{width:"200px" }}    
		  value={this.state.from} 
		  onChange={this.handlechangefrom}
		  />

          <span> to </span>
		  
          <input 
		  id="" 
		  type="text"  
		  id="to" 
		  className="form-control " 
		  placeholder="To" 
		  style={{width:"200px" }}  
		  value={this.state.togo} 
		  onChange={this.handlechangetogo }
		  />

          <span>Number of Tickets</span>
		  
          <input 
		  id="" 
		  type="text"  
		  id="quantity" 
		  className="form-control " 
		  placeholder="Number Of Tickets" 
		  style={{width:"100px" }}  
		  value={this.state.quantity} 
		  onChange={this.handlechangequantity } 
		  />

          <Link to="/admin" > 
		  
		  <button className="btn btn-box-tool" type="submit"  style = {{marginBottom:"10px"}}> 
		  
		  Search

		  
          </button>
		
          </Link> 
		  
          </form>
		  
          </div>
  
      
        )
    }
}

export default App