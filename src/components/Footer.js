import React, { Component } from 'react';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import '../components/Footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <a href="mailto:tristantoupin@gmail.com" rel="noopener noreferrer" target="_blank"><FaEnvelope className="fa-envelope"/></a> &nbsp;
                <br/>
                <p> © 2018 eRA All Rights Reserved.</p>
            </div>
        )
    }
}

export default Footer;
