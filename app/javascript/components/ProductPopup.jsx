import React, { Component } from 'react';
import Popup from './Popup';

class ProductPopup extends Component {
    constructor() {
    super();
    this.state = {
      product: {
        id: 2,
        name: 'ProductLaunched',
        link: 'https://code4startup.com',
        media: '/images/code4startup.jpeg',
        upvote: 278,
        description: 'Code for starups',
        maker: {
          name: 'leo',
          avatar: '/images/myself.jpg'
        }
      }
    };
  }
  
    renderUpvoteButton() {
        return (
          <a className="upvote-button" href="#">
            <span>
              <i className="fa fa-sort-asc"></i>
            </span>
            {this.state.product.upvote}
          </a>
        );
  }

  renderHeader() {
    return (
      <header style={{backgroundImage: 'url(' + this.state.product.media + ')'}}>
        <section className="header-shadow">
          <h1>{this.state.product.name}</h1>
          <p>{this.state.product.description}</p>
          <section>
            {this.renderUpvoteButton()}
            <a className="getit-btn" href={this.state.product.link} target="_blank">GET IT</a>
          </section>
        </section>
      </header>
    );
  }


   renderBodyDiscussion(){
    return(
            <section className="discussion">
                <h2>Discussion</h2>
                <section>
                    <img className="medium-avatar" src="/images/myself.jpg"/>
                    <input placeholder="What do you think of this product?" />
                </section>
            </section>
        );     
       
   }
   
    renderBody(){
        return(
            <section className="product-popup-body">
                <main>
                {this.renderBodyDiscussion()}
                </main>
            </section>
            );
    }
    
    render

    
    render(){
        return(
            <Popup {...this.props} style="product-popup">
                {this.renderHeader()}
                {this.renderBody()}
            </Popup>
            );
        
    }
    
    
}

export default ProductPopup;