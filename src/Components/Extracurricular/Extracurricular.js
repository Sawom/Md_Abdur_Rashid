import React from 'react';

const Extracurricular = () => {
    return (
        <div className=' shadow-2xl mt-10 container mx-auto' id='ext' >
            <p className='text-center font-bold text-2xl' > Extracurricular Activities </p>
            <div className="hero mt-5 px-3">
                <div className="hero-content flex-col lg:flex-row md:flex-row">
                    {/* 1st table */}
                    <div style={{width: '50%'}} >
                        <p className='text-center font-bold text-xl'>Achievements</p>
                        <div className="overflow-x-auto">
                            <table className="table roboto">
                                <tbody>
                                    {/* row 1 */}
                                    <tr className="hover">
                                        <td>Director of Student welfare - UAP</td>
                                        <td>Best Volunteer Award</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr className="hover">
                                        <td>National Science Fair organized by Dhaka College(2015)</td>
                                        <td>Position: Champion, <br /> Category: Life science project </td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr className="hover">
                                        <td>Inter Department Programming Contest</td>
                                        <td>Position: 12th</td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* 2nd table activities section section*/}
                    <div style={{width: '50%'}} >
                        <p className='text-center font-bold text-xl'>Activities</p>
                        <div className="overflow-x-auto">
                            <table className="table roboto">
                                <tbody>
                                    {/* row 1 */}
                                    <tr className="hover">
                                        <td>Debating and public speaking club – DPSC</td>
                                        <td>Former President</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr className="hover">
                                        <td>ICPC World Final Dhaka – 2022</td>
                                        <td>Volunteer</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr className="hover">
                                        <td>Think Covid 19 Program (2022)</td>
                                        <td>Organizer</td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr className="hover">
                                        <td>Intra-University Debating and Public Speaking Championship -2022 </td>
                                        <td>Organizer</td>
                                    </tr>
                                    {/* row 5 */}
                                    <tr className="hover">
                                        <td>Rising Star Debate Tournament</td>
                                        <td>Organizer</td>
                                    </tr>
                                    {/* row 6 */}
                                    <tr className="hover">
                                        <td>Dhaka College Science Club</td>
                                        <td>Project team</td>
                                    </tr>
                                    {/* row 7 */}
                                    <tr className="hover">
                                        <td>Dhaka College Debating Society</td>
                                        <td>Debater</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extracurricular;