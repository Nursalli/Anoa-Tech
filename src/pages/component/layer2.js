import React from "react";

const layer2 = (props) => {
    return(
        <div className="mb-5">
            <p className="fs-3 fw-bold text-primary text-center" style={{ lineHeight: "30px" }}>What We Can Do</p>
            <div className="d-flex justify-content-center mb-5">
                <div className="bg-primary" style={{ height: '5px', width: '10%'}}></div>
            </div>
            <div className="row">
                <div className="col-md-4 mb-4 text-center">
                    <div className="card shadow">
                        <img src={props.Logo} className="card-img-top" alt={"Gambar Card"} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 text-center">
                    <div className="card shadow">
                        <img src={props.Logo} className="card-img-top" alt={"Gambar Card"} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 text-center">
                    <div className="card shadow">
                        <img src={props.Logo} className="card-img-top" alt={"Gambar Card"} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 offset-md-2 text-center">
                    <div className="card shadow">
                        <img src={props.Logo} className="card-img-top" alt={"Gambar Card"} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>            
                <div className="col-md-4 mb-4 text-center">
                    <div className="card shadow">
                        <img src={props.Logo} className="card-img-top" alt={"Gambar Card"} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default layer2;