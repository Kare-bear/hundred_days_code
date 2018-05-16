import React, {Component} from "react";
import "./Day1.css";

export default function Day1(props){
    
        return(
            <div>
                <div className="thoughtworks-container">
                    <nav className="thoughtworks-nav-item">
                        <a className="nav-sub-item1">ESPANOL</a>
                        <a className="nav-sub-item2">PORTUGUES</a>
                        <a className="nav-sub-item3">DEUTSCH</a>
                        <a className="nav-sub-item4">中文</a>
                    </nav>
                    <input type="text" className="search-item" placeholder="Search thoughtworks.com"/>
                    <input type="image" className="submit-item"></input>
                    <div className="header-sub-items">
                        <a className="header-sub-item1">NEWS</a>
                        <a className="header-sub-item2">CONTACT US</a>
                    </div>
                </div>
                <main>
                    
{/*g2 = group 2*/}
                <div className="g2-thoughtworks-container">
                    <div className="g2-logo-item">Thoughtworks</div>
                        <nav className="g2-nav-items">
                            <a className="g2-sub-item-1">Clients</a>
                            <a className="g2-sub-item-2">Services</a>
                            <a className="g2-sub-item-3">Products</a>
                            <a className="g2-sub-item-4">Insights</a>
                            <a className="g2-sub-item-5">Events</a>
                            <a className="g2-sub-item-6">About Us</a>
                            <a className="g2-sub-item-7">Careers</a>
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
