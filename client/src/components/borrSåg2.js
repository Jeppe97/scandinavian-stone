import React, { Component } from 'react';
import Slider from './Slider';
import { Link } from "react-router-dom";

export class bS2 extends Component {

    constructor() {
        super();

        this.state = {

        }
    }


    refreshPage() {
        window.location.assign("/");
    }
    render() {
        return (
            <div>
                <div >
                    <form className="dimension-form 1">
                        <h1 className="sides">Sida 1:</h1>
                        Antal hål:
                <Slider />
                        Längd på hålen:
                <Slider />

                Spräng sort:
                <Slider />
                        Mängd sprängdeg:
                <Slider />
                      

                    </form>

                    
                    <form className="dimension-form 2">
                        <h1 className="sides">Sida 2:</h1>
                        Antal hål:
                <Slider />
                        Längd på hålen:
                <Slider />

                Spräng sort:
                <Slider />
                        Mängd sprängdeg:
                <Slider />
                        <Link className="btn1" to="/">
                            <button onClick={this.refreshPage}>Spara</button>
                            
                        </Link>
                    </form>
                    
                 
                    
                  
                </div>
            </div>
        );
    }
}
export default bS2;
