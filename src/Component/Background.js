import React from "react";

//import Component
import Navbar from "./Navbar";
import Owner from "./websiteOwner";

let link = ["About", "Work", "Contact"];

class Background extends React.Component {
    render() {
        return (
            <div className="img-div">
                <Navbar brand="M.A.J" link={link}></Navbar>
                <Owner></Owner>
            </div>
        )
        
    }
}

export default Background;