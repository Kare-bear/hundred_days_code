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
                    <input type="text" placeholder="Search"/>
                    <a>News</a>
                    <a>Contact Us</a>
                </header>
            </div>
        )
    }
}