import React from "react";

const layer6 = (props) => {
    return(
        <div>
            <hr className="mb-4" style={{ height: "3px" }} />
            <p className="fs-3 fw-bold text-primary">Anoa Tech</p>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <p className="fw-bold">PT Anoa Tech</p>
                    <p className="mb-3" style={{ maxWidth: "400px" }}>{props.Address}</p>
                    <p className="fw-bold">Follow Us</p>
                    <a href="#" className="d-inline m-2" ><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="d-inline m-2" ><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" className="d-inline m-2" ><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" className="d-inline m-2" ><i class="fa-brands fa-youtube"></i></a>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="row">
                        <div className="col-md-4">
                            <p className="fw-bold">Product</p>
                            {
                                props.Product.map( data =>
                                    <p key={data.id}>{data.name}</p> 
                                )
                            }
                        </div>
                        <div className="col-md-4">
                            <p className="fw-bold">Company</p>
                            {
                                props.Company.map( data =>
                                    <p key={data.id}>{data.name}</p> 
                                )
                            }
                        </div>
                        <div className="col-md-4">
                            <p className="fw-bold">Support & Sales</p>
                            {
                                props.SupportandSales.map( data =>
                                    <p key={data.id}>{data.name}</p> 
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default layer6;