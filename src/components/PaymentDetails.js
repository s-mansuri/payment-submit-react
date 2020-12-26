import React, { Component } from 'react'
import OrderPlaced from './OrderPlaced'

export class PaymentDetails extends Component {
    
    render() {
        let { response } = this.props
        console.log(this.props)
        return (
            <div>
                <div className={response === 'Payment Success' ? 'done' : 'not-done'}>
                <h2>The order has been placed!</h2>
                </div>
                <br />
                <OrderPlaced response={response} />
            </div>
        )
    }
}

export default PaymentDetails
