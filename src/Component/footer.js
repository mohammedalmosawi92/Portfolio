import React from "react";

class Footer extends React.Component {
    render() {
        return (
        <div>
            <footer className="container-full">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="copyright">
                            Mohammed Aziz Jawad
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="social-media text-right">
                            <li>
                                <a href="https://twitter.com/Mohammedazeez92" target="_blank">
                                    <i className="fa fa-twitter" aria-hidden="true">
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/mohammedalmosawi92/" target="_blank">
                                    <i className="fa fa-facebook-official" aria-hidden="true">
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/mohammedalmosawi92/" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true">
                                    </i>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        )
    }
}

export default Footer