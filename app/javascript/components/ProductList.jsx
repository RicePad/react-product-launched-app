import React, { Component } from 'react';
import ProductItem from './ProductItem'

class ProductList extends Component {
  
  render(){
      return(
           
           <section>
            <ul className="product-list">
                        <li className="product-item">
                            <a className="upvote-button" href="#" >
                                <span>
                                    <i className="fa fa-sort-asc"></i>
                                </span>
                                <br/>
                                {this.props.productList[0].upvote}
                            
                            </a>
                            <img className="product-item-media" src={this.props.productList[0].media} />
                            <section className="product-item-info">
                                <a>
                                    <h2>{this.props.productList[0].name}</h2>
                                </a>
                                <p></p>
                                <a href="#">
                                    <img className="small-avatar" src={this.props.productList[0].maker.avatar}/>
                                </a>
                            </section>
                            <a className="product-item-link" href={this.props.productList.link}></a>
                            <span>
                                <i className="fa fa-external-link"></i>
                            </span>
                        </li>
                    </ul>
                     <ul className="product-list">
                        <li className="product-item">
                            <a className="upvote-button" href="#" >
                                <span>
                                    <i className="fa fa-sort-asc"></i>
                                </span>
                                <br/>
                                {this.props.productList[1].upvote}
                            
                            </a>
                            <img className="product-item-media" src={this.props.productList[1].media} />
                            <section className="product-item-info">
                                <a>
                                    <h2>{this.props.productList[1].name}</h2>
                                </a>
                                <p></p>
                                <a href="#">
                                    <img className="small-avatar" src={this.props.productList[1].maker.avatar}/>
                                </a>
                            </section>
                            <a className="product-item-link" href={this.props.productList.link}></a>
                            <span>
                                <i className="fa fa-external-link"></i>
                            </span>
                        </li>
                    </ul>
           
           
           </section>
          );
      
  }
    
    
}


export default ProductList;