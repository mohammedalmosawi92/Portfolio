import React from "react";

class MySkills extends React.Component {
    componentDidMount() {
        console.log(this.props.cv._id)
    }
    render() {
        let skills = Object.keys(this.props.cv).map((item, index) => {
            if(item === "languages" || item === "databases" || item === "frameworks") {
                return (
                    <div className="row text-center" key={this.props.cv._id + index}>
                        <div className="col-xs-6">
                            <h2 className="skill-name">{item}</h2>
                        </div>
                        <div className="col-xs-6">
                            <h3>{this.props.cv[item]}</h3>
                        </div>
                    </div>
                )
            }
        })
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                        <h1 className="myskills-title">
                            Skills
                        </h1>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-8 col-md-offset-2">
                        {skills}
                    </div>
                </div>
            </div>
        )
    }
}

export default MySkills;
