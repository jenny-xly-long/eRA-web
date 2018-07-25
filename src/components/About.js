import React, { Component } from 'react';
import '../components/About.css';

class About extends Component{
    render(){
        return(
            <div className= "about" id='about'>
                <h2>What is <strong>Era</strong></h2>
                <div className="row">
                  <br/>
                  <p>
                  Our passionate team is combining health and technology to
                  provide more personalized and
                  efficient solutions to both patients and clinicians.
                  Era Rehab aims to revolutionize the physiotherapist
                  rehabilitation process by leveraging sensors and artificial
                  intelligence to help clinicians understand their patient’s
                  condition and visualize their progress.
                  </p>
                </div>
            </div>
        )
    }
}

export default About;
