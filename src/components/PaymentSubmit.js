import React, { Component } from 'react'
import axios from 'axios';
import PaymentDetails from './PaymentDetails';

export class PaymentSubmit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            cardTypes: [{
                id: 1,
                value: 'Visa'
            }],
            cardNumber: '',
            expiry: '',
            name: '',
            email: '',
            cardType: '',
            isSubmitted: false,
            isValid: false,
            response: ''
        }
    }
    
    //Methods to handle the changes

    handleCardType = (e) => {
        console.log(e)
        this.setState({
            cardType: e.target.value
        })
    }

    handleCardNumber = (e) => {
        this.setState({
            cardNumber: e.target.value
        })
    }
    handleExpiry = (e) => {
        this.setState({
            expiry: e.target.value
        })
    }
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleEmail = (e) => {
        if((this.state.name.length > 4) && this.state.cardNumber > 4){
            this.setState({
                email: e.target.value,
                isValid: true
            })
        }
        
    }

    //handle the submit of the form
    handleSubmit = () => {
        this.setState({
            isSubmitted: true
        })

        axios.post('http://www.mocky.io/v2/5d8de422310000b19d2b517a', this.state)
         .then((res) => {
             console.log(res.status)
             this.setState({
                 response: res.data.responseMessage
             })
         })
         .catch((err) => {
             this.setState({
                 response: err.message
             })
         })
    }

  //handle initial render

    async componentDidMount(){
        axios.get('http://www.mocky.io/v2/5d145fa22f0000ff3ec4f030')
         .then( response => {
             let cTypes  = [];
             for(let i = 0; i < response.data.cardTypes.length; i++){
                 cTypes.push(response.data.cardTypes[i])
                 
             }
             this.setState({
                 cardTypes:cTypes
             })
             
         })
        
    }

    render() {
        const cTypes = this.state.cardTypes;
        if(!this.state.isSubmitted){
        return(
            <div>
            <form className="paymentSubmit inputFields form-group">
            <div>
                <label>Card Types:</label>
                {
                        cTypes.length > 0 ?
                        <select name="cardType" className="form-control" onChange={this.handleCardType}>
                            {
                            this.state.cardTypes.map((id, value) => 
                            <option key={value}>{value}</option>
                            )}
                        </select> : null}                
            </div>
            <div>
                <label>Card Number</label>
                <input className="form-control" type="text" onChange={this.handleCardNumber} placeholder="Enter Card Number" />
            </div>
            <div>
                <label>Expiry</label>
                <input className="form-control"  type="month" onChange={this.handleExpiry} />
            </div>
            <div>
                <label>Name</label>
                <input className="form-control"  type="text" onChange={this.handleName} placeholder="Enter Name" maxLength='50' />
            </div>
            <div>
                <label>Email</label>
                <input className="form-control"  type="email" onChange={this.handleEmail} placeholder="Enter Email" />
            </div> 
            <br />
            <button disabled={!this.state.isValid} className="btn btn-dark" type="submit" onClick={this.handleSubmit}>Confirm Payment</button>
            </form>
            </div>
            )
        }
        if(this.state.isSubmitted){
            return( <PaymentDetails cardType={this.state.cardType} cardNumber={this.state.cardNumber} expiry={this.state.expiry} name={this.state.name} email={this.state.email} response={this.state.response} />
            )
        }
            
    }
}

export default PaymentSubmit
