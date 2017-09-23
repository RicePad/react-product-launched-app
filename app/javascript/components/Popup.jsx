import React, { Component } from 'react';
import LoginPopup from './LoginPopup';


class Popup extends Component {
  
   renderPopupContent(){
       
       return (
       <section className="popup">
        <section className="popup-wrap">
            <img src="/images/close.png" onClick={this.props.hidePopup}/>
        </section>
        <section className={"popup-content " + this.props.style}>
            <section> {this.props.children}</section>
        </section>
       </section>
           );
       
      
       
   }
   
   
   
   
   
   
   
    render(){
        return(
            <section>
                {
                
                this.props.status? this.renderPopupContent() : null
                    
                    
                }
            </section>
            );
        
    }
    
}

export default Popup;



