import React, { Component } from 'react';
import Popup from './Popup';
import LoginPopup from './LoginPopup';
import PostPopup from './PostPopup';
import ProfileMenu from './ProfileMenu';


class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
          displayPopup: false

        };


    }


    showPopup = () => {
        return this.setState({displayPopup: true});

    }

    hidePopup = () =>{
        return this.setState({displayPopup: false});
    }

    renderProductSearch(){
        return (
            <section className="left-side">
                <input className="product-search" placeholder="SEARCH" />
            </section>

            );

    }

    renderLogo(){
        return (
            <a onClick={this.showPopup} ><img src="/images/favicon.ico"/></a>
            );

    }


    renderUser(){
        return (
            <section className="right-side">
            
            {
                this.props.user 
                ?
                
                <section>
                    <span> 
                      <a onClick={this.showPopup} className="login-btn">POST</a>
                    </span>
                      <PostPopup status={this.state.displayPopup} hidePopup={this.hidePopup} />
                      <ProfileMenu />
                </section>
                :
                
                <section>
                     <a onClick={this.showPopup} className="login-btn">LOGIN</a>
                     <LoginPopup status={this.state.displayPopup} hidePopup={this.hidePopup} />
                </section>
                
                
            }
               
             </section>
            );

    }




    render(){
        return(
           <section>

            <section className="navbar">
                {this.renderProductSearch()}
                {this.renderLogo()}
                {this.renderUser()}
            </section>

          </section>
            );

    }

}

export default Navbar;