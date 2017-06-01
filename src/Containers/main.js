import {connect} from "react-redux";
import * as Actions from "../Actions";
import {bindActionCreators} from "redux";
import Wrapper from "./wrapper";

let mapStateToProps = (state) => {
    return state
}

let mapDispatchToProps = (disptach) => {
    return bindActionCreators(Actions, disptach)
}

let AppConnector = connect(mapStateToProps, mapDispatchToProps)(Wrapper);

export default AppConnector