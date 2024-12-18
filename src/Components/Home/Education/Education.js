import React from 'react';

const Education = () => {
    return (
        <div className='servicebackground pt-10'>
            <div className='mt-10 container mx-auto' id='education'>
            <p className='text-center font-bold text-2xl' > Educational Background </p>
            <div className='grid lg:grid-cols-3 gap-8  md:grid-cols-3' >
                {/* 1st */}
                <div className="card  ">
                    <div className="card-body">
                        <h2 className="card-title ">University of Asia Pacific</h2>
                        <p className='roboto'>Bachelor of Science in Computer Science and Engineering </p> 
                        <p className='roboto'> <span> Passing year: </span> 2023 </p>
                    </div>
                </div>
                {/* 2nd */}
                <div className="card  ">
                    <div className="card-body">
                        <h2 className="card-title">Dhaka College</h2>
                        <p> Higher Secondary School Certificate </p>
                        <p className='roboto'> <span>Group:</span> Science </p>
                        <p className='roboto'> <span> Passing year: </span> 2016 </p>
                    </div>
                </div>
                {/* 3rd */}
                <div className="card  ">
                    <div className="card-body">
                        <h2 className="card-title">Motijheel Model High School and College</h2>
                        <p className='roboto'>Secondary School Certificate</p>
                        <p className='roboto'> <span>Group:</span> Science </p>
                        <p className='roboto'> <span> Passing year: </span> 2014 </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Education;