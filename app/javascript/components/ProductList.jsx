import React, { Component } from 'react';
import ProductItem from './ProductItem'

class ProductList extends Component {
  
  render(){
      return(
           

            <ul className="product-list">
                <ProductItem
                    name = {this.props.productList[0].name}
                    media = {this.props.productList[0].media}
                    upvote = {this.props.productList[0].upvote}
                    makerAvatar = {this.props.productList[0].maker.avatar}
                    link = {this.props.productList[0].link}
                    description = {this.props.productList[0].description}

                />    
                
                 <ProductItem
                    name = {this.props.productList[1].name}
                    media = {this.props.productList[1].media}
                    upvote = {this.props.productList[1].upvote}
                    makerAvatar = {this.props.productList[1].maker.avatar}
                    link = {this.props.productList[1].link}
                    description = {this.props.productList[1].description}

                />
            
            
                {this.props.productList.map((item, id) => {
                    return <ProductItem key={id} {...item} />
                    
                    
                })}
            </ul>
             
                 
                       
           
           
           
     
          );
      
  }
    
    
}


export default ProductList;