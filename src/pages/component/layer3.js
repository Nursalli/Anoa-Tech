import React from "react";

const layer3 = (props) => {
    return(
        <div className="mb-5">
            <p className="fs-3 fw-bold text-primary text-center" style={{ lineHeight: "30px" }}>Why Choose Us</p>
            <div className="d-flex justify-content-center mb-5">
                <div className="bg-primary" style={{ height: '5px', width: '10%'}}></div>
            </div>
            <div className="row my-4">
                <div className="col-md-6 mb-5">
                    <div className="row">
                        <div className="col-md-4 col-4">
                            <div className="my-5">
                                <img src={props.Thumbnail} className="rounded mb-2" alt={"Gambar props.Thumbnail"} style={{ height:"20%", width: "100%" }}/>
                                <img src={props.Thumbnail} className="rounded mb-2" alt={"Gambar props.Thumbnail"} style={{ height:"20%", width: "100%" }}/>
                            </div>
                        </div>
                        <div className="col-md-4 col-4">
                            <img src={props.Thumbnail} className="rounded mb-2" alt={"Gambar props.Thumbnail"} style={{ height:"54%", width: "100%" }}/>
                            <img src={props.Thumbnail} className="rounded mb-2" alt={"Gambar props.Thumbnail"} style={{ height:"54%", width: "100%" }}/>
                        </div>
                        <div className="col-md-4 col-4">
                            <img src={props.Thumbnail} className="rounded my-5" alt={"Gambar props.Thumbnail"} style={{ height:"80%", width: "100%" }}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-1 m-auto">
                            <div class="badge bg-light rounded-circle p-3">
                                <i class="fa-solid fa-file-lines text-dark fa-2xl"></i>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <span className="fs-5 fw-bold">Secrum Value as Working Principle</span>
                            <p className="fs-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1 m-auto">
                            <div class="badge bg-light rounded-circle p-3">
                                <i class="fa-solid fa-users text-dark fa-lg"></i>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <span className="fs-5 fw-bold">Professional Team</span>
                            <p className="fs-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1 m-auto">
                            <div class="badge bg-light rounded-circle p-3">
                                <i class="fa-solid fa-chart-column text-dark fa-lg"></i>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <span className="fs-5 fw-bold">Sustainability Orientation</span>
                            <p className="fs-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1 m-auto">
                            <div class="badge bg-light rounded-circle p-3">
                                <i class="fa-solid fa-laptop text-dark fa-lg"></i>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <span className="fs-5 fw-bold">Tech Geek</span>
                            <p className="fs-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default layer3;