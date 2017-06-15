import React from "react";

class Wrapper extends React.Component {
    componentWillMount() {
        this.props.getCV();
    }
    render() {
        let children = React.cloneElement(this.props.children, this.props);
        return (
            <div>
                {children}
            </div>
        )
    }
}

export default Wrapper
