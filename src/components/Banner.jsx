import { Component } from "react";
import "./Banner.scss"

class Banner extends Component{
    render(){
        return(
            <div className="content-center">
                <div className="banner vh-100 overflow-hidden">
                    <div className="container-banner">
                        <span>Codefire</span>
                        <div className="badge">
                            <span>dev</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
}

export default Banner;