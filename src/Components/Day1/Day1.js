import React, {Component} from "react";
import "./Day1.css";

export default function Day1(props){
    
        return(
            <div>
                <div className="thoughtworks-container">
                    <nav className="thoughtworks-nav-item">
                        <a className="nav-sub-item1">Espanol</a>
                        <a className="nav-sub-item2">Portugues</a>
                        <a className="nav-sub-item3">Deutsch</a>
                        <a className="nav-sub-item4">中文</a>
                    </nav>
                    <input type="text" className="search-item" placeholder="Search thoughtworks.com"/>
                    <button type="submit" className="submit-item"></button>
                    <div className="header-sub-items">
                        <a className="header-sub-item1">NEWS</a>
                        <a className="header-sub-item2">CONTACT US</a>
                    </div>
                </div>
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
{/*Starting Day 2: adding CSS...*/}
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
