import React, { Component } from 'react';
import ProductList from './ProductList'

class App extends Component {
   constructor(props){
       super(props);
       
       this.state = {
           productList: [
               {
                  name: 'jonathan',
                  id: 4,
                  media: 'images/codeacademy.png'
                   
                   
               },
               {
                  name: 'lala',
                  id: 5,
                  media: 'images/codeacademy.png'
                   
                   
               }
               
               
               ]
       };
       
       
       
   }
    render(){
        return(
            <div>
                <h1>{this.state.productList[0].name}</h1>
                <ul>
                    <ProductList productList={this.state.productList}/>
                </ul>

            </div>
            
            );
        
    }
    
}

export default App;