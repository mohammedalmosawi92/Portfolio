import React from "react";
import ReactDOM from "react-dom";

//import component 
import AppConnector from "./Containers/main.js";
import store from "./store.js";

class App extends React.Component {
    render() {
        return (
            <div>
                <AppConnector store={store} />
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.querySelector(".app"));