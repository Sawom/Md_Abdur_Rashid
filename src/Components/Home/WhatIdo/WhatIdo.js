import React from 'react';

const WhatIdo = () => {
    return (
        <div className='mt-10'>
            <div className='grid lg:grid-cols-3 gap-8  md:grid-cols-3' >
                {/* 1st */}
                <div className="card w-90 bg-base-100 ">
                    <div className="card-body">
                        <h2 className="card-title">Web Design</h2>
                        
                    </div>
                </div>
                {/* 2nd */}
                <div className="card w-90 bg-base-100 ">
                    <div className="card-body">
                        <h2 className="card-title">Front-end</h2>
                        
                    </div>
                </div>
                {/* 3rd */}
                <div className="card w-90 bg-base-100 ">
                    <div className="card-body">
                        <h2 className="card-title">Back-end</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIdo;