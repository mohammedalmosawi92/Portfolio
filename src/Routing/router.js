import React from "react"
import { Provider } from "react-redux";
import { Router, Route , IndexRoute, hashHistory} from "react-router";

//import components
import Wrapper from "../Containers/main";
import CMS from "../Containers/cmsContainer";
import Page from "../Containers/page";

let Root = ({store}) => (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Wrapper}>
                <IndexRoute component={Page}></IndexRoute>
                <Route path="/cms" component={CMS}></Route>
            </Route>
        </Router>
    </Provider>
)

export default Root
