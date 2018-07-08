import React, { Component } from 'react';
import name from '../images/eRA1.png';
import '../components/Home.css'

class Home extends Component{
    render () {
        return(
            <div className="home" id="home">
                <div className="intro">
                    <img src={name} alt="name" className="name-img"/>
                    <h1 className="title"><strong>AI</strong> IN PHYSIOTHERAPY</h1>
                </div>
            </div>
        )
    }
}

export default Home;