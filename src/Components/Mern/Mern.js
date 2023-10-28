import React from 'react';
import mern1 from '../../images/mern/arsTravels/mern1.png';
import mern2 from '../../images/mern/arsTravels/mern2.png';
import mern3 from '../../images/mern/arsTravels/mern3.png';
import mern4 from '../../images/mern/arsTravels/mern4.png';
import mern5 from '../../images/mern/arsTravels/mern5.png';
import mern6 from '../../images/mern/arsTravels/mern6.png';
import mern7 from '../../images/mern/arsTravels/mern7.png';
import mern8 from '../../images/mern/arsTravels/mern8.png';
import mern9 from '../../images/mern/arsTravels/mern9.png';

import mern10 from '../../images/mern/arsTravels/mern10.png';
import mern11 from '../../images/mern/arsTravels/mern11.png';
import mern12 from '../../images/mern/arsTravels/mern12.png';

import { AiOutlineFundView } from 'react-icons/ai';

const Mern = () => {
    return (

        <div >
            <div className='mx-auto  container' >
                {/* element */}
                <div className='grid lg:grid-cols-2 gap-8  md:grid-cols-2 h-full' >

                    {/* 1st */}
                    <div >
                        <div className="card cardStyle bg-base-100 shadow-2xl">
                            {/* figure er jaygay carousel use korchi */}
                            <figure> 
                                <div className="carousel w-full">
                                    {/* 1st slide */}
                                    <div id="slide181" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern10} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide183" className="btn btn-circle">❮</a> 
                                        <a href="#slide182" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                    {/* 2nd slide */}
                                    <div id="slide182" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern11} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide181" className="btn btn-circle">❮</a> 
                                        <a href="#slide183" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                    {/* 3rd slide */}
                                    <div id="slide183" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern12} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide182" className="btn btn-circle">❮</a> 
                                        <a href="#slide181" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                </div>
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">Laptop Land</h2>
                                <div className="card-actions justify-end">
                                    <a href="https://653cfa6a9c2d710cfc654eca--ubiquitous-llama-8cf89b.netlify.app"  target="_blank" >
                                        <button className="btn btn-outline btn-sm border-4 mt-6">
                                            <span className='flex px-2'><AiOutlineFundView className='mr-2' size={16} /> view  </span> 
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* 2nd part */}
                    <div >
                        <div className="card cardStyle bg-base-100 shadow-2xl">
                            {/* figure er jaygay carousel use korchi */}
                            <figure> 
                                <div className="carousel w-full">
                                    {/* 1st slide */}
                                    <div id="slide81" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern7} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide83" className="btn btn-circle">❮</a> 
                                        <a href="#slide82" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                    {/* 2nd slide */}
                                    <div id="slide82" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern8} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide81" className="btn btn-circle">❮</a> 
                                        <a href="#slide83" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                    {/* 3rd slide */}
                                    <div id="slide83" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern9} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide82" className="btn btn-circle">❮</a> 
                                        <a href="#slide81" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                </div>
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">ARS-Restaurant</h2>
                                <div className="card-actions justify-end">
                                    <a href="https://voluble-crisp-63c7a2.netlify.app"  target="_blank" >
                                        <button className="btn btn-outline btn-sm border-4 mt-6">
                                            <span className='flex px-2'><AiOutlineFundView className='mr-2' size={16} /> view  </span> 
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* 2nd part */}
                    <div >
                        <div className="card cardStyle bg-base-100 shadow-2xl">
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
                                <div className="card-actions justify-end">
                                    <a href="https://toursite-44305.web.app/"  target="_blank" >
                                        <button className="btn btn-outline btn-sm border-4 mt-6">
                                            <span className='flex px-2'><AiOutlineFundView className='mr-2' size={16} /> view  </span> 
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3rd part*/}
                    <div  >
                        <div className="card cardStyle bg-base-100 shadow-2xl">
                            {/* figure er jaygay carousel use korchi */}
                            <figure > 
                                <div className="carousel w-full">
                                    {/* 1st slide */}
                                    <div id="slide4" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern4} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide6" className="btn btn-circle">❮</a> 
                                        <a href="#slide5" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                    {/* 2nd slide */}
                                    <div id="slide5" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern5} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide4" className="btn btn-circle">❮</a> 
                                        <a href="#slide6" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                    {/* 3rd slide */}
                                    <div id="slide6" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern6} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide5" className="btn btn-circle">❮</a> 
                                        <a href="#slide4" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                </div>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Planet-Shopping</h2>
                                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                                <div className="card-actions justify-end">
                                    <a href="https://ecommerceapp-f7c88.web.app/"  target="_blank" >
                                        <button className="btn btn-outline btn-sm border-4 mt-6">
                                            <span className='flex px-2'><AiOutlineFundView className='mr-2' size={16} /> view  </span> 
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div> 
            </div>
        </div>
    );
};

export default Mern;