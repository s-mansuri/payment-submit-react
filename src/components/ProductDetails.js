import React, { Component } from 'react'


export class ProductDetails extends Component {
    render() {
        let currentDate = new Date().toLocaleString();
        return (
            <div className="productDetails">
                <p><span style={{fontWeight: "bold"}}>Product Name: </span>Dell 1315</p>
                <p><span style={{fontWeight: "bold"}}>Date: </span>{currentDate}</p>
                <p><span style={{fontWeight: "bold"}}>Amount: </span>300USD</p>
            </div>
        )
    }
}

export default ProductDetails
