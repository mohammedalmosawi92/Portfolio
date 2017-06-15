import React from "react";
import ReactDOM from "react-dom";

//import component 
import Root from "./Routing/router.js";
import store from "./store.js";

class App extends React.Component {
    render() {
        return (
            <div>
                <Root store={store} />
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.querySelector(".app"));
