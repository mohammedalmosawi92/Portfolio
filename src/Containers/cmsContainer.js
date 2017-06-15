import React from "react";

//import containers
import CMS from "../Component/cms";

class CmsContainer extends React.Component {
    render() {
        return (
            <div>
                <CMS {...this.props} ></CMS>
            </div>
        )
    }
}

export default CmsContainer
