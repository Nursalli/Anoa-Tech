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
                    <div className="card shadow p-3">
                        <div className="card-body">
                            <i class="fa-solid fa-laptop-code text-danger fa-4x mb-4"></i>
                            <h5 className="card-title">{ props.Card[0]['title'] }</h5>
                            <p className="card-text">{ props.Card[0]['desc'] }</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 text-center">
                    <div className="card shadow p-3">
                        <div className="card-body">
                            <i class="fa-solid fa-screwdriver-wrench text-success fa-4x mb-4"></i>
                            <h5 className="card-title">{ props.Card[1]['title'] }</h5>
                            <p className="card-text">{ props.Card[1]['desc'] }</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 text-center">
                    <div className="card shadow p-3">
                        <div className="card-body">
                            <i class="fa-solid fa-shield text-primary fa-4x mb-4"></i>
                            <h5 className="card-title">{ props.Card[2]['title'] }</h5>
                            <p className="card-text">{ props.Card[2]['desc'] }</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 offset-md-2 text-center">
                    <div className="card shadow p-3">
                        <div className="card-body">
                            <i class="fa-solid fa-desktop text-success fa-4x mb-4"></i>
                            <h5 className="card-title">{ props.Card[3]['title'] }</h5>
                            <p className="card-text">{ props.Card[3]['desc'] }</p>
                        </div>
                    </div>
                </div>            
                <div className="col-md-4 mb-4 text-center">
                    <div className="card shadow p-3">
                        <div className="card-body">
                            <i class="fa-solid fa-users-gear text-warning fa-4x mb-4"></i>
                            <h5 className="card-title">{ props.Card[4]['title'] }</h5>
                            <p className="card-text">{ props.Card[4]['desc'] }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default layer2;