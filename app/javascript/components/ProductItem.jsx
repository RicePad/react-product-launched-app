import React, { Component } from 'react';

class ProductItem extends Component {
  
  render(){
      return(
                    <section>
                         <li className="product-item">
                            <a className="upvote-button" href="#" >
                                <span>
                                    <i className="fa fa-sort-asc"></i>
                                </span>
                                <br/>
                                {this.props.upvote}
                            
                            </a>
                            <img className="product-item-media" src={this.props.media} />
                            <section className="product-item-info">
                                <a>
                                    <h2>{this.props.name}</h2>
                                </a>
                                <p>{this.props.description}</p>
                                <a href="#">
                                    <img className="small-avatar" src={this.props.makerAvatar}/>
                                </a>
                            </section>
                            <a className="product-item-link" href={this.props.link}></a>
                            <span>
                                <i className="fa fa-external-link"></i>
                            </span>
                        </li>
                        
                        
                    </section>
                        
             
          );
      
  }
    
    
}


export default ProductItem;