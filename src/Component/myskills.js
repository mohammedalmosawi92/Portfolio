import React from "react";

//import Components

class MySkills extends React.Component {
    render() {
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
                                <h3>HTML, CSS, Javascript.</h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-xs-6">
                                <h2>Frameworks</h2>
                            </div>
                            <div className="col-xs-6">
                                <h3>JQuery, AngularJS, ReactJS, NodeJS.</h3>
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