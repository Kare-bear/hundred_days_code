import React, {Component} from "react";

export default class Day1 extends Component{
    constructor(props){
        super(props);

        this.state={

        }


    }

    render(){
        return(
            <div>
                <header>
                    <nav>
                        <a>Espanol</a>
                        <a>Portugues</a>
                        <a>Deutsch</a>
                        <a>中文</a>
                    </nav>
                    <input type="text" placeholder="Search thoughtworks.com"/>
                    <button type="submit"></button>
                    <a>Contact Us</a>
                </header>
                <main>
                    <div>
                        Thoughtworks
                        <nav>
                            <a>Clients</a>
                            <a>Services</a>
                            <a>Products</a>
                            <a>Insights</a>
                            <a>Events</a>
                            <a>About Us</a>
                            <a>Careers</a>
                        </nav>
                    </div>
                    <article>
                        <section>ALWAYS INVENTING, ALWAYS DELIVERING</section>
                        <section>Great ideas, brought to life with technology. In weeks, not years.</section>

                        <a>Technology Radar Volume 18
                            <p>Subscribe Now</p>
                            <img src=""/>
                        </a>
                        <a>Intelligent Empowerment
                            
                            <img src=""/>
                        </a>
                        <a>
                            <img src=""/>
                        </a>
                        <a>
                            <img src=""/>
                        </a>
                        <a>
                            <img src=""/>
                        </a>
                    </article>
                </main>
            </div>
        )
    }
}