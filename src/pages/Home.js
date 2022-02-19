import React from "react";
import Icon from './assets/Mandiri.png';
import Thumbnail from './assets/office.jpg';
import User from './assets/user.png';

const home = (props) => {
    return (
        <div>
            <div className="container">
                {/* layer1 */}
                <div class="jumbotron" style={{ marginTop: '70px' }}>
                    <div className="row">
                        <div className="col-md-6 bg-danger" style={{ padding: "120px 10px" }}>
                            <h1 style={{ lineHeight: "16px" }}>Growing Your</h1>
                            <h1 className="text-primary">Business</h1>
                            <p style={{ lineHeight: "30px" }}>{props.KalimatAwal}</p>
                            <a className="btn btn-primary px-4 py-2 mt-3">Get Started</a>
                        </div>
                        <div className="col-md-6 App bg-warning">
                            <img src={props.Logo} style={{ backgroundRepeat: "no-repeat", backgroundSize: "contain" }} />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-2 col-sm-2">
                            <img src={Icon} style={{ width: "100%", height: "100%" }}/>
                        </div>
                        <div className="col-md-2 col-sm-2">
                            <img src={Icon} style={{ width: "100%", height: "100%" }}/>
                        </div>
                        <div className="col-md-2 col-sm-2">
                            <img src={Icon} style={{ width: "100%", height: "100%" }}/>
                        </div>
                        <div className="col-md-2 col-sm-2">
                            <img src={Icon} style={{ width: "100%", height: "100%" }}/>
                        </div>
                        <div className="col-md-2 col-sm-2">
                            <img src={Icon} style={{ width: "100%", height: "100%" }}/>
                        </div>
                        <div className="col-md-2 col-sm-2">
                            <img src={Icon} style={{ width: "100%", height: "100%" }}/>
                        </div>
                    </div>
                    {/* layer2 */}
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
                    {/* layer3 */}
                    <div className="mb-5">
                        <p className="fs-3 fw-bold text-primary text-center" style={{ lineHeight: "30px" }}>Why Choose Us</p>
                        <div className="d-flex justify-content-center mb-5">
                            <div className="bg-primary" style={{ height: '5px', width: '10%'}}></div>
                        </div>
                        <div className="row my-4">
                            <div className="col-md-6 p-5">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="my-5">
                                            <img src={Thumbnail} className="rounded mb-2" alt={"Gambar Thumbnail"} style={{ height:"20%", width: "100%" }}/>
                                            <img src={Thumbnail} className="rounded mb-2" alt={"Gambar Thumbnail"} style={{ height:"20%", width: "100%" }}/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <img src={Thumbnail} className="rounded mb-2" alt={"Gambar Thumbnail"} style={{ height:"54%", width: "100%" }}/>
                                        <img src={Thumbnail} className="rounded mb-2" alt={"Gambar Thumbnail"} style={{ height:"54%", width: "100%" }}/>
                                    </div>
                                    <div className="col-md-4">
                                        <img src={Thumbnail} className="rounded my-5" alt={"Gambar Thumbnail"} style={{ height:"80%", width: "100%" }}/>
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
                    {/* layer4 */}
                    <div className="mb-5">
                        <p className="fs-3 fw-bold text-primary text-center" style={{ lineHeight: "30px" }}>What They Said ?</p>
                        <div className="d-flex justify-content-center mb-5">
                            <div className="bg-primary" style={{ height: '5px', width: '10%'}}></div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-4 text-center">
                                <div className="card shadow py-3">
                                    <div className="justify-content-center mb-0">
                                        <img src={User} className="card-img-top rounded-circle" alt={"Gambar Card"} style={{ width: '100px', height: '100px' }} />
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
                                        <img src={User} className="card-img-top rounded-circle" alt={"Gambar Card"} style={{ width: '100px', height: '100px' }} />
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
                                        <img src={User} className="card-img-top rounded-circle" alt={"Gambar Card"} style={{ width: '100px', height: '100px' }} />
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
                    {/* layer5 */}
                    <div className="mb-5">
                        <div className="card mb-3 shadow">
                            <div className="row p-3">
                                <div className="col-md-4 text-center">
                                    <img src={User} className="img-fluid rounded-start" alt={"Gambar User"} style={{ width: "80%"}}/>
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
                     {/* layer6 */}
                    <div className="mb-5">
                        <hr className="mb-4" style={{ height: "3px" }} />
                        <p className="fs-3 fw-bold text-primary">Anoa Tech</p>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="fw-bold">PT Anoa Tech</p>
                                <p className="mb-3" style={{ maxWidth: "400px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                <p className="fw-bold">Follow Us</p>
                                <a href="#" className="d-inline m-2" ><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="d-inline m-2" ><i class="fa-brands fa-twitter"></i></a>
                                <a href="#" className="d-inline m-2" ><i class="fa-brands fa-instagram"></i></a>
                                <a href="#" className="d-inline m-2" ><i class="fa-brands fa-youtube"></i></a>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4">
                                        <p className="fw-bold">Product</p>
                                        <p>Product1</p>
                                        <p>Product2</p>
                                        <p>Product3</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="fw-bold">Company</p>
                                        <p>Company1</p>
                                        <p>Company2</p>
                                        <p>Company3</p>
                                        <p>Company4</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="fw-bold">Support & Sales</p>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center text-white bg-primary py-2 m-0">&copy;2020 PT ANOA TECH</p>
            </div>
        </div>
    );
};

export default home;