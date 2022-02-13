import React from "react";

const home = (props) => {
    return (
        <div>
            <div className="container">
                <div class="jumbotron">
                    <div className="row">
                        <div className="col-md-6 bg-warning" style={{ padding: "150px 10px" }}>
                            <h1 style={{ lineHeight: "16px" }}>Growing Your</h1>
                            <h1 className="text-primary">Business</h1>
                            <p style={{ lineHeight: "30px" }}>{props.KalimatAwal}</p>
                            <a className="btn btn-primary px-4 py-2 mt-3">Get Started</a>
                        </div>
                        <div className="col-md-6 bg-danger">
                            <p>Tos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default home;