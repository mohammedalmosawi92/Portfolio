import React from "react";

class Owner extends React.Component {
    render() {
        return (
            <div className="website-owner">
               <div className="container">
                   <div className="row text-center">
                       <div className="col-md-12">
                           <h1>{this.props.cv.name}</h1>
                       </div>
                   </div>
                   <div className="row text-center">
                       <div className="col-md-12">
                            <h3>{this.props.cv.job}</h3>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}
            
export default Owner;
