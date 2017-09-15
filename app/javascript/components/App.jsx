import React, { Component } from 'react';
import ProductList from './ProductList'

class App extends Component {
   constructor(props){
       super(props);
       
       this.state = {
           productList: [
               {
                  id: 1,
                  name: 'Product Hunt',
                  link: 'https://producthunt.com',
                  media: 'images/codeacademy.jpeg',
                  upvote: 169,
                  description: 'Hottest startups',
                  maker: {
                      name: 'Unknown',
                      avatar: '/images/hieu.jpeg'
                      
                  }
                }, {
                  id: 2,
                  name: 'Product Launched',
                  link: 'https://productlaunched.com',
                  media: 'images/codea4startup.jpeg',
                  upvote: 200,
                  description: 'Hottest list of products',
                  maker: {
                      name: 'Jonathan Li',
                      avatar: '/images/kitty.png'
                      
                  }
                }
               
               ]
       };
       
       
       
   }
    render(){
        return(
            <section>
                <section className="container">
                    <ul className="product-list">
                        <li className="product-item">
                            <a className="upvote-button" href="#" >
                                <span>
                                    <i class="fa fa-sort-asc"></i>
                                </span>
                                <br/>
                                {this.state.productList[0].upvote}
                            
                            </a>
                            <img className="product-item-media" src={this.state.productList[0].media} />
                            <section className="product-item-info">
                                <a>
                                    <h2>{this.state.productList[0].name}</h2>
                                </a>
                                <p>{this.state.productList[0].description}</p>
                                <a href="#">
                                    <img className="small-avatar" src={this.productList[0].maker.avatar}/>
                                </a>
                            </section>
                            <a className="product-item-link" href={this.state.productList[0].link}></a>
                            <span>
                                <i className="fa fa-external-link"></i>
                            </span>
                        </li>
                    </ul>
                </section>
           </section>
            
            
            );
        
    }
    
}

export default App;