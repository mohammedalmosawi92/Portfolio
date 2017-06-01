import React from "react";

class MySkills extends React.Component {
    render() {
        let lang = [];
        if(this.props.cv.languages !== undefined) {
            lang = this.props.cv.languages.map((item, index) => {
                if(index !== this.props.cv.languages.length - 1) {
                    return (
                        <span> {item},</span>
                  )
                }else {
                    return (
                        <span> {item}.</span>
                    )
                }
            })
        }
  
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
                        <div className="row">
                            <div className="col-xs-6">
                                <h2>Languages</h2>
                            </div>
                            <div className="col-xs-6">
                                <h3>{lang}</h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-xs-6">
                                <h2>Frameworks</h2>
                            </div>
                            <div className="col-xs-6">
                                <h3>AngularJS, ReactJS, NodeJS.</h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-xs-6">
                                <h2>Database</h2>
                            </div>
                            <div className="col-xs-6">
                                <h3>MongoDB.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MySkills;