import React from "react";

const layer4 = (props) => {
    return(
        <div className="mb-5">
            <p className="fs-3 fw-bold text-primary text-center" style={{ lineHeight: "30px" }}>What They Said ?</p>
            <div className="d-flex justify-content-center mb-5">
                <div className="bg-primary" style={{ height: '5px', width: '10%'}}></div>
            </div>
            <div className="row">
                <div className="col-md-4 mb-4 text-center">
                    <div className="card shadow py-3">
                        <div className="justify-content-center mb-0">
                            <img src={props.User} className="card-img-top rounded-circle" alt={"Gambar Card"} style={{ width: '100px', height: '100px' }} />
                            <div>
                                <span className="fs-5 fw-bold">Mila</span>
                                <p className="fs-6">Jabatan</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 text-center">
                    <div className="card shadow py-3">
                        <div className="justify-content-center mb-0">
                            <img src={props.User} className="card-img-top rounded-circle" alt={"Gambar Card"} style={{ width: '100px', height: '100px' }} />
                            <div>
                                <span className="fs-5 fw-bold">Mila</span>
                                <p className="fs-6">Jabatan</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 text-center">
                    <div className="card shadow py-3">
                        <div className="justify-content-center mb-0">
                            <img src={props.User} className="card-img-top rounded-circle" alt={"Gambar Card"} style={{ width: '100px', height: '100px' }} />
                            <div>
                                <span className="fs-5 fw-bold">Mila</span>
                                <p className="fs-6">Jabatan</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default layer4;