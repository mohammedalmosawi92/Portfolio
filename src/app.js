import React from "react";
import ReactDOM from "react-dom";

//import component 
import Background from "./Component/Background";

class App extends React.Component {
    render() {
        return (
            <div>
                <Background></Background>
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.querySelector(".app"));