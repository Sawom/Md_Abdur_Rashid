import React from 'react';

const Education = () => {
    return (
        <div className='mt-10 container mx-auto' id='education'>
            <p className='text-center font-bold text-2xl' > Educational Background </p>
            <div className='grid lg:grid-cols-3 gap-8  md:grid-cols-3' >
                {/* 1st */}
                <div className="card bg-base-100 ">
                    <div className="card-body">
                        <h2 className="card-title">University of Asia Pacific</h2>
                        <p>Bachelor of Science in Computer Science and Engineering </p> 
                        <p> <span >CGPA:</span>  3.51 out of 4.00</p>
                        <p> <span> Passing year: </span> 2023 </p>
                    </div>
                </div>
                {/* 2nd */}
                <div className="card bg-base-100 ">
                    <div className="card-body">
                        <h2 className="card-title">Dhaka College</h2>
                        <p> Higher Secondary School Certificate </p>
                        <p> <span>Group:</span> Science </p>
                        <p> <span>GPA:</span> 5.00 out of 5.00 </p>
                        <p> <span> Passing year: </span> 2016 </p>
                    </div>
                </div>
                {/* 3rd */}
                <div className="card bg-base-100 ">
                    <div className="card-body">
                        <h2 className="card-title">Motijheel Model High School and College</h2>
                        <p>Secondary School Certificate</p>
                        <p> <span>Group:</span> Science </p>
                        <p> <span>GPA:</span> 5.00 out of 5.00 </p>
                        <p> <span> Passing year: </span> 2014 </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;