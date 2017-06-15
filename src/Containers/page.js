import React from "react";

//import containers
import Background from "./Background";
import Bio from "../Component/bio";
import Skills from "../Component/skills";
import Separator from "./separator";
import Footer from "../Component/footer";

class Wrapper extends React.Component {
    render() {
        return (
            <div>
                <Background className="background-comp" {...this.props}></Background>
                <Bio className="bio-comp" {...this.props}></Bio>
                <Separator></Separator>
                <Skills {...this.props}></Skills>
                <Separator></Separator>
                <Footer></Footer>
            </div>
        )
    }
}

export default Wrapper
