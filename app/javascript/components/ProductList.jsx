import React, { Component } from 'react';
import ProductItem from './ProductItem'

class ProductList extends Component {
  
  render(){
      return(
           
           <div> 
                
                <ProductItem
                    name= {this.props.productList[0].name}
                    productID= {this.props.productList[0].id}
                    media= {this.props.productList[0].media}
                
                />
             

                

            </div>
             
          );
      
  }
    
    
}


export default ProductList;