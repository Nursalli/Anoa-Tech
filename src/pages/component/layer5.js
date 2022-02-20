import React from "react";

const layer5 = (props) => {
    return(
        <div className="mb-5">
            <div className="card mb-3 shadow">
                <div className="row p-3">
                    <div className="col-md-4 text-center">
                        <img src={props.User} className="img-fluid rounded-start" alt={"Gambar User"} style={{ width: "80%"}}/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1>Start Your Project</h1>
                            <h1 className="text-primary"> <span className="text-dark"> With </span> Anoa Tech</h1>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="#" className="btn btn-primary"> Reach Us </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default layer5;