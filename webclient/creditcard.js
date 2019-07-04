import React , {Component} from "react";
import axios from "axios";


class Creditcard  extends Component{

  constructor(props) {

    super(props);

    this.handlechangenameOnCard = this.handlechangenameOnCard.bind(this);
    this.handlechangecardNumber = this.handlechangecardNumber.bind(this);
    this.handlechangeAmount = this.handlechangeAmount.bind(this);
    this.handlechangecvcNumber = this.handlechangecvcNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    this.state = {
      nameOnCard: " ",
      cardNumber: " ",
      Amount: " ",
      cvcNumber:"",
      formErrors:{
        
      }
        }
    }
 
    handlechangenamenameOnCard = e =>{
       // e.preventDefault();
        this.setState({
            nameOnCard: e.target.value
        })
  
    }

    handlechangcardNumber = e =>{
      // e.preventDefault();
       this.setState({
        cardNumber: e.target.value
       })
 
   }

   handlechangeAmount = e =>{
    // e.preventDefault();
     this.setState({
      Amount: e.target.value
     })

 }

 handlechangecvcNumber= e => {
  // e.preventDefault();
   this.setState({
    cvcNumber: e.target.value
   })

}


     handleSubmit = e => {
        e.preventDefault();
       // console.log(this.state) 

       console.log(`Form submitted:`);
       console.log(`Todo Description: ${this.state.nameOnCard}`);
       console.log(`Todo Responsible: ${this.state.cardNumber}`);
       console.log(`Todo Priority: ${this.state. Amount}`);
       console.log(`Todo Priority: ${this.state. cvcNumber}`);

      const newData = {
           nameOnCard : this.state.nameOnCard,
           mail : this.state.cardNumber,
           number: this.state.Amount,
           password:this.state.cvcNumber
      };

       axios.post("http://localhost:3000/api/card/add", newData)
       .then(res => {
           console.log(res.data)
       })

  

       this.setState({
          nameOnCard: " ",
          cardNumber: " ",
          Amount: " ",
          cvcNumber: ""
    })

    }


  render(){
     return(
       <div> 
      <div className="row "  style={{marginTop:"30px"}}>
      <form className="form-horizontal"  onSubmit={this.handleSubmit}>
      
             < input
               id=""
               type="text"
               id="from"
               className="form-control "
               placeholder="Name on card"
               style={{ width: "200px" }}
               value={this.state.from}
               onChange={this.handlechangefrom}
             />

             <span> to </span>

             <input
               id=""
               type="text"
               id="to"
               className="Card Number"
               placeholder="To"
               style={{ width: "200px" }}
               value={this.state.togo}
               onChange={this.handlechangetogo}
             />

             <span>Number of Tickets</span>

             <input
               id=""
               type="text"
               id="quantity"
               className="CVC"
               placeholder="Number Of Tickets"
               style={{ width: "100px" }}
               value={this.state.quantity}
               onChange={this.handlechangequantity } 
		  />
		  
             <input
               id=""
               type="text"
               id="quantity"
               className="CVC"
               placeholder="Amount"
               style={{ width: "100px" }}
               value={this.state.quantity}
               onChange={this.handlechangequantity}
             />

             <Link to="/admin" > 
		  
		  <button className="btn btn-box-tool" type="submit"  style = {{marginBottom:"10px"}}> 
		  
		  Pay

		  
          </button>
		
          </Link> 
		  
	  
	  

      </form>
    </div>
 
    </div> 
     )

  }

} 

export default Creditcard;