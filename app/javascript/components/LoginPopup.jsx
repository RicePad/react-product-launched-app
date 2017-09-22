import React, { Component }from 'react';
import Popup from './Popup';


class LoginPopup extends Component {
   
    render(){
        return(
            <Popup status={this.props.status} hidePopup={this.props.hidePopup}>
                <img src="/images/kitty.png" />
                <h1>Login to join the community</h1>
                <p>Codehunt is a Community to share and geek out about the latest code and news</p>
                <button className="facebook-btn">Login with Facebook</button>
                <p>We'll never post to Facebook without your permission</p>
            </Popup>
            
            
            );
        
        
    }
    
}


export default LoginPopup;