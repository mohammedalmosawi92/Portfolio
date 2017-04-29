import React from "react";

class Navbar extends React.Component {
    render() {
        let liLinks = this.props.link.map((item) => {
            return (
                <li className="navbar-side">
                    <a href="#/about" className="routes">{item}</a>
                </li>
            )
        })
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-full">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <i className="glyphicon glyphicon-align-justify"></i>
                        </button>
                        <div className="navbar-header">
                            <div className="navbar-brand">
                                <header>
                                    <a href="#/">{this.props.brand}</a>
                                </header>
                            </div>
                        </div>
                        <div className="myRoutes">
                            <div className="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav navbar-right">
                                    {liLinks}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;