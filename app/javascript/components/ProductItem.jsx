import React, { Component } from 'react';

class ProductItem extends Component {
  
  render(){
      return(
           
           <div> 
                
                <li>{this.props.name}</li> 
                <li>{this.props.productID}</li>
                <li>{this.props.media}</li>

                

            </div>
             
          );
      
  }
    
    
}


export default ProductItem;