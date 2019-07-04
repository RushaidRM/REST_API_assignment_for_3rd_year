import React, { Component } from "react";
import axios from "axios";
import { Link,BrowserRouter,Route } from 'react-router-dom';
import payment from "./payment";



const Todo = props => (
    <tr>
        <td>{props.todo.name}</td>
        <td>{props.todo.email}</td>
        <td>{props.todo.number}</td>
        <td>{props.todo.password}</td>
        <td>
        <Link to={"/user/edit/"+props.todo._id}  className=" " > <i className="material-icons">edit</i> </Link>
        </td>
  
    </tr>
)


class Useredit extends Component{

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get("http://localhost:3000/api/user/edit")
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

      componentDidUpdate(){
        axios.get("http://localhost:3000/api/user/edit")
        .then(response => {
            this.setState({ todos: response.data });
        })
        .catch(function (error){
            console.log(error);
        })
      }



    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

	render() {
        return(
       
            
      	  <div className="row "  style={{marginTop:"20px",marginLeft:"10px"}}>
 
       <form>
          <i className="form-horizontal">Train Ticket Reservation</i>

		   <table className="" >
		   
                <thead>
				
                    <tr>
                    
                    </tr>
					
                </thead>
				
                <tbody>
				
                <tr>
                  <td> From : Colobo-fort</td>
                  <td> To : Kandy </td>
                  <td> Cost :158</td>
                </tr>
				
                <Link to="/admin" > 
		  
				<button className="btn btn-box-tool" type="submit"  style = {{marginBottom:"10px"}}> 
		  
				Confrim payment
	  
				</button>
		
				</Link> 
     
                </tbody>
				
            </table>
		  
		  

         
		  
          </form>
		  
          </div>
  
      
        )
    }
	
	
	
	
}

export default Useredit