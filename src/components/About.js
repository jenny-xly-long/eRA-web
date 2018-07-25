import React, { Component } from 'react';
import '../components/About.css';

class About extends Component{
    render(){
        return(
            <div className= "about" id='about'>
                <h2>About <strong>eRA</strong></h2>
                <div className="row">
                    <div className="col-sm-12"><h3>Who we are</h3>
                    <br/>
                    <p>Omae wa mou shindeiru... NANI????!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12"><h3>What we do</h3><br/>
                    <p>Omae wa mou shindeiru... NANI????!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12"><h3>What makes us unique</h3><br/>
                    <p>Omae wa mou shindeiru... NANI????!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
