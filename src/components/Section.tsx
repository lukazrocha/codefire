import { Component } from "react";
import './Section.scss';

class Section extends Component {
    render(){
        return(
            <>
                <div className="how-we-work">
                    <div className="img-dev"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptas vero voluptate debitis consequuntur, beatae, quaerat, quae repellat eveniet nemo 
                    eligendi magnam tenetur asperiores veritatis modi dignissimos obcaecati quis mollitia
                    maiores!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit omnis aliquid placeat nemo minima molestiae. 
                    Atque repellendus, consequuntur nobis totam unde beatae nemo deserunt officia 
                    odit aliquid voluptas aperiam mollitia!
                    </p>
                    <div className="clear"></div>
                </div>
                
            </>
        );
    }
}

export default Section;