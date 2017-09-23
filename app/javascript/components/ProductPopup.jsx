import React, { Component } from 'react';
import Popup from './Popup';

class ProductPopup extends Component {
    
    render(){
        return(
            <Popup {...this.props} style="product-popup">
                <h2>Product Info</h2>
            </Popup>
            );
        
    }
    
    
}

export default ProductPopup;