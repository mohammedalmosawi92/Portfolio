import React from "react";

//import Component
import Navbar from "../Component/Navbar.js";
import Owner from "../Component/websiteOwner.js";
import Myphoto from "../Component/myphoto.js";

let link = ["About", "Work", "Contact"];

class Background extends React.Component {
    render() {
        return (
            <div>
                <div className="img-div">
                    <div className="wrapper">
                        <Navbar brand="M.A.J" link={link}></Navbar>
                        <Owner {...this.props}></Owner>
                        <Myphoto {...this.props}>></Myphoto>
                    </div>
                </div>
                
            </div>
        ) 
    }
}

export default Background;
