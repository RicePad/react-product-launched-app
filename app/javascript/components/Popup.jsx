import React, { Component } from 'react';


class Popup extends Component {
   renderPopupContent(){
       <section className="popup">
        <section className="popup-wrap">
            <img src="/images/close.png"/>
        </section>
        <section className="popup-content">
            <section> POPUP CONTENT SHOULD BE HERE</section>
        </section>
       </section>;
       
   }
   
   
   
   
   
   
   
    render(){
        return(
            <section>
                {this.renderPopupContent()}
            </section>
            );
        
    }
    
}

export default Popup;