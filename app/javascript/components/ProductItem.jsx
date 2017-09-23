import React, { Component } from 'react';
import ProductPopup from './ProductPopup';

class ProductItem extends Component {
  constructor(props){
        super(props);
        
        this.state = {
            displayProductPopup: false
        };
    }

    
    showProductPopup = () => {
        this.setState({displayProductPopup: true});
     }
    
    hideProductPopup = () => {
        this.setState({displayProductPopup: false});
     }
    
  renderUpvoteButton(){
      return (
          <a className="upvote-button" href="#" >
            <span>
             <i className="fa fa-sort-asc"></i>
            </span>
             <br/>
              {this.props.upvote}
           </a>
          );
      
  }
  
  renderNewWindowIcon(){
      return(
          <a className="product-item-link" href={this.props.link}>
            <span>
             <i className="fa fa-external-link"></i>
            </span>
         </a>
          
          );}
          
 renderInfoSession(){
     return(
         <section className="product-item-info">
             <a onClick={this.showProductPopup}>
              <h2>{this.props.name}</h2>
            </a>
             <p>{this.props.description}</p>
             <a href="#">
               <img className="small-avatar" src={this.props.makerAvatar}/>
             </a>
        </section>
         
         );
     
 }
  
  render(){
      return(
                    <section>
                         <li className="product-item">
                            {this.renderUpvoteButton()}
                            <img className="product-item-media" src={this.props.media} />
                            {this.renderInfoSession()}
                            {this.renderNewWindowIcon()}
                            <ProductPopup status={this.state.displayProductPopup} hide={this.state.hideProductPopup} />
                        </li>
                        
                        
                    </section>
                        
             
          );
      
  }
    
    
}


export default ProductItem;