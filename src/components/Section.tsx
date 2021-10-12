import { Component } from "react";
import './Section.scss';

class Section extends Component {
    render(){
        return(
            <>
                <div className="how-we-work">
                    <div className="content-row-1">
                        <div className="content-row-image-1">
                            <img src="../images/undraw_Developer_activity_re_39tg.svg" alt="" />
                        </div>
                        <div className="content-row-text-1">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas vero voluptate debitis consequuntur, beatae, quaerat, quae repellat eveniet nemo 
                            eligendi magnam tenetur asperiores veritatis modi dignissimos obcaecati quis mollitia
                            maiores!
                            </p>
                        </div>
                    </div>
                    <div className="content-row-2">
                        <div className="content-row-text-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas vero voluptate debitis consequuntur, beatae, quaerat, quae repellat eveniet nemo 
                            eligendi magnam tenetur asperiores veritatis modi dignissimos obcaecati quis mollitia
                            maiores!
                            </p>
                        </div>
                        <div className="content-row-image-2">
                            <img src="../images/undraw_Developer_activity_re_39tg.svg" alt=""/>
                        </div>
                    </div>              
                    <div className="clear"></div>
                </div>
                
            </>
        );
    }
}

export default Section;