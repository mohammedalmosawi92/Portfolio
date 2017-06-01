import React from "react";

class Description extends React.Component {
    render() {
        
        return (
            <div className="desc container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="bio">Bio</h2>
                    </div>
                </div>
                <div  className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="aboutMy">
                            <div className="first-paragraph">
                            {this.props.cv.bio}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Description;