import React from "react";
import $ from "jquery";

class CMS extends React.Component {
    componentDidMount() {

        //to get the id and putProperty
        let getId = ()=> this.props.cv._id;
        let getProp = () => this.props.putCV;

        //to add new property
        document.getElementById('add').addEventListener("click",function() {
            let opt = document.getElementById("newKeyOpt").value;
            var val = document.getElementById("newValue").value;
            var property = {};
            property[opt] = val;
            let put = getProp();
            put(property, getId());
        });
        $(document).on("click", ".edit", () => {
            console.log("sss")
        })
    }
    render() {
        let keys = Object.keys(this.props.cv).map((item, index) => {
            if(item === "bio" || item === "frameworks" || item == "databases" || item === "languages" || item === "job" || item === "name"|| item === "image") {
                return (
                    <div className="row" key={this.props.cv._id + index}>
                        <div className="col-md-12">
                            <h3 className="key-name">{item}</h3>
                        </div>
                        <div className="col-md-10">
                            <input className="form-control" defaultValue={this.props.cv[item]} onChange={(event) => this.props.cv[item] = event.target.value}/>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-success edit" onClick={()=> this.props.putCV(this.props.cv, this.props.cv._id)}>
                                <i className="glyphicon glyphicon-pencil"></i>
                            </button>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-danger" onClick={() => this.props.deleteProp(this.props.cv._id, item)}>
                                <i className="glyphicon glyphicon-trash"></i>
                            </button>
                        </div>
                    </div>
                )
            }
        })
        let properties = ["name", "job", "bio", "languages", "frameworks", "databases", "image"]
        var option = properties.map((item) => {
            if(this.props.cv[item] === undefined) {
                return (
                    <option value={item}>{item}</option>
                )
            }
        })
        return (
            <div className="Container">
                <div className="row text-center">
                    <div className="col-md-12">
                        <header>
                            <h1>Portofolio CMS</h1>
                        </header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        {keys}
                        <div className="row">
                           <div className="col-md-12">
                               <h3>Add New Property:</h3>
                           </div>
                            <div className="col-xs-5">
                                <select id="newKeyOpt" className="form-control">
                                    {option}
                                </select>
                            </div>
                            <div className="col-xs-5">
                                <input type="text" className="form-control" placeholder="value" id="newValue"/>
                            </div>
                            <div className="col-xs-2 text-center">
                                <button className="btn btn-primary" id="add">
                                    <i className="glyphicon glyphicon-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CMS
