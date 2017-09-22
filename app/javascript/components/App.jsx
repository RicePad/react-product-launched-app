import React, { Component } from 'react';
import ProductList from './ProductList';
import Homepage from './Homepage';
import Navbar from './Navbar';

class App extends Component {
   constructor(props){
       super(props);
       
       this.state = {
           productList: [
               {
                  id: 1,
                  name: 'Product Hunt',
                  link: 'https://producthunt.com',
                  media: 'images/codecademy.jpeg',
                  upvote: 169,
                  description: 'Hottest startups',
                  maker: {
                      name: 'Unknown',
                      avatar: 'images/hieu.jpeg'
                      
                  }
                }, 
                
                {
                  id: 2,
                  name: 'Product Launched',
                  link: 'https://productlaunched.com',
                  media: 'images/code4startup.jpeg',
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
                 <Navbar />
                 <Homepage />
              <section className="container">
                <ProductList productList={this.state.productList} />      
              </section>
            </section>
            
            
            );
        
    }
    
}

export default App;