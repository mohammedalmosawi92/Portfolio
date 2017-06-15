import React from "react";

class Myphoto extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-md-12">
                        <div className="myphoto">
                            <img src={this.props.cv.image} className="img-responsive" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Myphoto;
