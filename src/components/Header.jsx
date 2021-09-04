import { Component } from "react";
import './Header.scss'

class Header extends Component{
    render(){
        return (
            <div className="header">
                <div className="container">
                    <a href="#">codefire</a>

                    <div className="navbar">
                        <ul>
                            <li><a href="#">Como trabalhamos</a></li>
                            <li><a href="#">Nossas Soluções</a></li>
                            <li><a href="#">Nosso Time</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default Header;
