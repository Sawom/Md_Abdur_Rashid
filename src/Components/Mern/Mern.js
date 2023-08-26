import React from 'react';
import mern1 from '../../images/mern/arsTravels/mern1.png';
import mern2 from '../../images/mern/arsTravels/mern2.png';
import mern3 from '../../images/mern/arsTravels/mern3.png';

const Mern = () => {
    return (
        <div className='mx-auto' >
            {/* element */}
                <div className='grid lg:grid-cols-2 gap-8  md:grid-cols-2' >
                    {/* 1st part */}
                    <div >
                        <div className="card bg-base-100 shadow-2xl">
                            {/* figure er jaygay carousel use korchi */}
                            <figure> 
                                <div className="carousel w-full">
                                    {/* 1st slide */}
                                    <div id="slide1" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern1} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide3" className="btn btn-circle">❮</a> 
                                        <a href="#slide2" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                    {/* 2nd slide */}
                                    <div id="slide2" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern2} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" className="btn btn-circle">❮</a> 
                                        <a href="#slide3" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                    {/* 3rd slide */}
                                    <div id="slide3" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern3} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide2" className="btn btn-circle">❮</a> 
                                        <a href="#slide1" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                </div>
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">ARS-Travels</h2>
                                <p className='pStyle' >ARS-Travels is a full stack MERN Application.
                                    Dynamic router implemented.
                                    User can book a tour package, cancel or change
                                    login, logout, confirm password reset , email verification added.
                                </p>
                                <div className="card-actions justify-end">
                                    <a href="https://toursite-44305.web.app/"  target="_blank" >
                                        <button className="btn btn-active btn-neutral"> View</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2nd part*/}
                    <div  >
                        <div className="card  bg-base-100 shadow-xl">
                            {/* figure er jaygay carousel use korchi */}
                            <figure > 
                                <div className="carousel w-full">
                                    {/* 1st slide */}
                                    <div id="slide4" className="carousel-item relative w-full">
                                        <img alt='projectImage' src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide6" className="btn btn-circle">❮</a> 
                                        <a href="#slide5" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                    {/* 2nd slide */}
                                    <div id="slide5" className="carousel-item relative w-full">
                                        <img alt='projectImage' src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide4" className="btn btn-circle">❮</a> 
                                        <a href="#slide6" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                    {/* 3rd slide */}
                                    <div id="slide6" className="carousel-item relative w-full">
                                        <img alt='projectImage' src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide5" className="btn btn-circle">❮</a> 
                                        <a href="#slide4" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                </div>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
        </div>
    );
};

export default Mern;