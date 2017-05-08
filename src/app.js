import React from "react";
import ReactDOM from "react-dom";

//import component 
import Background from "./Containers/Background";
import Bio from "./Containers/bio";
import Skills from "./Containers/skills";
import Separator from "./Containers/separator";

class App extends React.Component {
    render() {
        return (
            <div>
                <Background className="background-comp"></Background>
                <Bio className="bio-comp"></Bio>
                <Separator></Separator>
                <Skills></Skills>
                <Separator></Separator>
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.querySelector(".app"));