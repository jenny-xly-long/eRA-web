import React, { Component } from 'react';
import '../components/Team.css';
import tristan from '../images/tristan.jpg';
import jenny from '../images/jenny.jpg';
import yves from '../images/yves.jpg';
import zhen from '../images/zhen.jpg';
import feras from '../images/feras.jpg';

class Team extends Component{
    render(){
        return(
            <div className="team">
                <div className="row">
                    <div class="card col-sm-4">
                        <img src={zhen} className="avatar"/>
                        <div class="container">
                            <h4><b>Zhen Lun Chen</b></h4> 
                            <p>Co-Founder & ...</p> 
                        </div>
                    </div>
                    <div class="card col-sm-4">
                        <img src={feras} className="avatar"/>
                        <div class="container">
                            <h4><b>Feras Al Taha</b></h4> 
                            <p>Co-Founder & ...</p> 
                        </div>
                    </div>
                    <div class="card col-sm-4">
                        <img src={jenny} className="avatar"/>
                        <div class="container">
                            <h4><b>Jenny Long</b></h4> 
                            <p>Co-Founder & ...</p> 
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="card col-sm-4">
                        <img src={tristan} className="avatar"/>
                        <div class="container">
                            <h4><b>Tristan Saumure Toupin</b></h4> 
                            <p>Co-Founder & ...</p> 
                        </div>
                    </div>
                    <div class="card col-sm-4">
                        <img src={yves} className="avatar"/>
                        <div class="container">
                            <h4><b>Yves Blain-Montesano</b></h4> 
                            <p>Co-Founder & ...</p> 
                        </div>
                    </div>
                    <div class="card col-sm-4">
                        <img src={tristan} className="avatar"/>
                        <div class="container">
                            <h4><b>Tristan Saumure Toupin</b></h4> 
                            <p>Co-Founder & ...</p> 
                        </div>
                    </div>
                </div>
            </div>

            
        )
    }

}

export default Team;