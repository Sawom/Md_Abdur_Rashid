import React from 'react';

const WhatIdo = () => {
    return (
        <div className='servicebackground pt-10'>
            <div className=' container mx-auto' id='todo' >
            <p className='text-center font-bold text-2xl' > My Services </p>
            <div className='grid lg:grid-cols-3 gap-5  md:grid-cols-3' >
                {/* 1st */}
                <div className="card ">
                    <div className="card-body">
                        <h2 className="card-title">Web UI Design</h2>
                        <p className=' roboto' >Design frontend user interface using Figma.</p>
                    </div>
                </div>
                {/* 2nd */}
                <div className="card ">
                    <div className="card-body">
                        <h2 className="card-title">Front-end</h2>
                        <p className=' roboto'>As a React developer, I have experience in React as well as HTML, CSS, Bootstrap, Tailwind CSS, Material UI, and Daisy UI.</p>
                    </div>
                </div>
                {/* 3rd */}
                <div className="card  ">
                    <div className="card-body">
                        <h2 className="card-title">Back-end</h2>
                        <p className=' roboto'>Experience working with Express js, Node js and Mongo DB as database for backend tasks.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default WhatIdo;