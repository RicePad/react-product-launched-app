import React, { Component } from 'react';

class ProfileMenu extends Component {
    renderProfileNav(){
        return (
            <nav className="profile-nav" ref="profileNav">
                <a href="#">My Profile</a>
                <a href="#">Logout</a>
           </nav>
            );
        
    }
    
    render(){
        return(
            <section className="profile-menu">
                <img src="/images/myself.jpg" className="profile-btn medium-avatar" />
                {this.renderProfileNav()}
            </section>
            );
        
    }
    
    
}

export default ProfileMenu;