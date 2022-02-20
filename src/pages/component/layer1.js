import React from "react";

const layer1 = (props) => {
    return(
        <div class="jumbotron"> 
            <div className="row">
                <div className="col-md-6" style={{ padding: "90px 10px" }}>
                    <h1 style={{ lineHeight: "16px" }}>Growing Your</h1>
                    <h1 className="text-primary">Business</h1>
                    <p style={{ lineHeight: "30px" }}>{props.KalimatAwal}</p>
                    <a className="btn btn-primary px-4 py-2 mt-3">Get Started</a>
                </div>
                <div className="col-md-6 App">
                    <img className="img-fluid p-4" src={props.Hero} />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md-2 col-6">
                    <img className="img-fluid" src={props.Icon} style={{ width: "100%", height: "100%" }}/>
                </div>
                <div className="col-md-2 col-6">
                    <img className="img-fluid" src={props.Icon} style={{ width: "100%", height: "100%" }}/>
                </div>
                <div className="col-md-2 col-6">
                    <img className="img-fluid" src={props.Icon} style={{ width: "100%", height: "100%" }}/>
                </div>
                <div className="col-md-2 col-6">
                    <img className="img-fluid" src={props.Icon} style={{ width: "100%", height: "100%" }}/>
                </div>
                <div className="col-md-2 col-6">
                    <img className="img-fluid" src={props.Icon} style={{ width: "100%", height: "100%" }}/>
                </div>
                <div className="col-md-2 col-6">
                    <img className="img-fluid" src={props.Icon} style={{ width: "100%", height: "100%" }}/>
                </div>
            </div>
        </div>
    );
};

export default layer1;