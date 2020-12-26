import React, { Component } from 'react'

export class OrderPlaced extends Component {
    
    render() {
        let { response } = this.props;
        return (
            <div>
                
        <div>
            <h3 className={response === 'Payment Success' ? 'success' : 'failure'}>{response === 'Payment Success' ? 'Your payment has been processeed successfully!' : 'There has been some issue from the server, please try later!'}</h3>
                <p>Invoice has been sent to registered email/phone.</p>
        </div>
            </div>
        )
    }
}

export default OrderPlaced
