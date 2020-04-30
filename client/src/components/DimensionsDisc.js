import React, { Component } from 'react';
import Slider from './Slider';
import { Link } from "react-router-dom";
import "./styles/DimensionsSkiva.scss";
import "./styles/navbar.scss"

export class DimensionsSkiva extends Component {
    constructor() {
        super();
    
        this.state = {
         Höjd1: "",
          Höjd2: "",
          Höjd3: "",
  
          Längd1: "",
          Längd2:"",
          Längd3:"",

        };
      
    
      this.state = { isToggleOn: true };
    
      this.handleChange0 = this.handleChange0.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleChange4 = this.handleChange4.bind(this);
      this.handleChange5 = this.handleChange5.bind(this);
  
    
      this.handleClick0 = this.handleClick0.bind(this);
      this.handleClick1 = this.handleClick1.bind(this);
    }
    handleChange0(event) {
      this.setState({
        Höjd1: event.target.value
      });
    }
    
    handleChange1(event) {
      this.setState({
        Höjd2: event.target.value
      });
    }
    
    handleChange2(event) {
      this.setState({
        Höjd3: event.target.value
      });
    }
    
    
    
    handleChange3(event) {
      this.setState({
        Längd1: event.target.value
      });
    }
    
    handleChange4(event) {
      this.setState({
        Längd2: event.target.value
      });
    }
    
    handleChange5(event) {
      this.setState({
        Längd3: event.target.value
      });
    }
  
    
    
    handleClick0() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
    
    handleClick1() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    
    }


    componentDidMount() {
        const drillblow1 = document.getElementById('drillblow1');
        const drillblow2 = document.getElementById('drillblow2');
        const drillblow3 = document.getElementById('drillblow3');

        const drillsaw1 = document.getElementById('drillsaw1');
        const drillsaw2 = document.getElementById('drillsaw2');
        const drillsaw3 = document.getElementById('drillsaw3');


        drillblow1.addEventListener('click', () => {
            drillblow1.classList.add("selected-button");
            drillsaw1.classList.remove("selected-button");
        });
        drillsaw1.addEventListener('click', () => {
            drillblow1.classList.remove("selected-button");
            drillsaw1.classList.add("selected-button");
        });
        drillblow2.addEventListener('click', () => {
            drillblow2.classList.add("selected-button");
            drillsaw2.classList.remove("selected-button");
        });
        drillsaw2.addEventListener('click', () => {
            drillsaw2.classList.add("selected-button");
            drillblow2.classList.remove("selected-button");
        });

        drillblow3.addEventListener('click', () => {
            drillblow3.classList.add("selected-button");
            drillsaw3.classList.remove("selected-button");
        });
        drillsaw3.addEventListener('click', () => {
            drillsaw3.classList.add("selected-button");
            drillblow3.classList.remove("selected-button");
        });

    }
    render() {
        return (
            <div>
                
                <div className="wrapper" id="wrapper">
                    <form className="dimension-form 1">
                        <h1 className="sides">Sida 1:</h1>
                        <input
              type="text"
              placeholder="Höjd"
              onChange={this.handleChange0}
            />
           <input
              type="text"
              placeholder="Längd"
              onChange={this.handleChange3}
            />
                        <Link className="btn1" to="/workmethods/primarySkiva/dimensions">
                            <button className="drillblow" id="drillblow1">Borrning + Sprängning</button>
                            <button className="drillsaw" id="drillsaw1">Borrning + Sågning</button>
                        </Link>
                    </form>

                    <form className="dimension-form 2">
                        <h1 className="sides">Sida 2:</h1>
                        <input
              type="text"
              placeholder="Höjd"
              onChange={this.handleChange1}
            />
           <input
              type="text"
              placeholder="Längd"
              onChange={this.handleChange4}
            />
                        <Link className="btn1" to="/workmethods/primarySkiva/dimensions">
                            <button className="drillblow" id="drillblow2" >Borrning + Sprängning</button>
                            <button className="drillsaw" id="drillsaw2" >Borrning + Sågning</button>
                        </Link>
                    </form>

                  

                    <form className="dimension-form 2">
                        <h1 className="sides">Botten:</h1>
                        <input
              type="text"
              placeholder="Höjd"
              onChange={this.handleChange3}
            />
           <input
              type="text"
              placeholder="Längd"
              onChange={this.handleChange5}
            />
                        <Link className="btn1" to="/workmethods/primarySkiva/dimensions">
                            <button className="drillblow" id="drillblow3" >Borrning + Sprängning</button>
                            <button className="drillsaw" id="drillsaw3" >Borrning + Sågning</button>
                        </Link>
                    </form>


                    <Link className="nextbtn" to="/workmethods/primarySkiva/dimensions/DSB2">
                        <button className="nextbtn">Nästa</button>

                    </Link>
                </div>
            </div>
        );
    }
}
export default DimensionsSkiva;
