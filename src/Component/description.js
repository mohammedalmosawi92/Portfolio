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
                            <p className="first-paragraph">
                                Hello, My name is Mohammed Almosawi I am 24 years old from Iraq. my hobbies are reading Manga, Watching Anime,and I am also a big Barcelona fan.
                            </p>
                            <p className="second-paragraph">
                                I love to code and make cool websites about the things I like.
                            </p>
                            <p className="third-paragraph">
                                If you need any help in your project or in anything feel free to ask.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Description;