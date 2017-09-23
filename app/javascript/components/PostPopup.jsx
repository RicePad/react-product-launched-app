import React, { Component }from 'react'
import Popup from './Popup';

class PostPopup extends Component {
    render(){
        return(
            <Popup {...this.props} style="post-up">
                <header>Post a new product</header>
                <section>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td><inpout placeholder="Enter product's name" /></td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td><inpout placeholder="Enter product's description" /></td>
                            </tr>
                             <tr>
                                <td>Link</td>
                                <td><inpout placeholder="www...." /></td>
                            </tr>
                            <tr>
                                <td>Media</td>
                                <td><inpout placeholder="paste a direct link to an image" /></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </Popup>
            
            );
        
    }
    
}


export default PostPopup;