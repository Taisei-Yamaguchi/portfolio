// Home.jsx
import React from 'react';

const About = () => {
    return (
        <div className=' bg-base-200 flex flex-col items-center'>
            <h1 className="mb-5 text-5xl font-bold">About</h1>
            <div className='flex flex-col'>
                <div className='flex flex-row justify-around max-md:hidden'>
                    <h2 className="mb-5 text-3xl font-bold">Education</h2>
                    <h2 className="mb-5 text-3xl font-bold">Work</h2>
                </div>
                <div className='md:hidden'>
                    <h2 className="mb-5 text-3xl font-bold">History</h2>
                </div>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2016.4 ~ 2019.3</time>
                        <div className="text-lg font-black">Ibaraki Prefectural Tsuchiura First High School, General Course</div>
                        </div>
                        <hr/>
                    </li>

                    <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2019.4 ~ 2023.3</time>
                        <div className="text-lg font-black">University of Tsukuba, School of Life and Environmental Sciences, Department of Biology</div>
                            <li>GPA: 3.77</li>
                            <li>Research Lab: TARA Center, Professor Ryusuke Niwa</li>
                        </div>
                        <hr />
                    </li>

                    <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                        <time className="font-mono italic">2022.9~2023.3</time>
                        <div className="text-lg font-black">Yamato Delivery (part time)</div>
                        In order to study abroad, I was working after laboratory in the night.
                        </div>
                        <hr />
                    </li>

                    <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2023.4 ~ on leave</time>
                        <div className="text-lg font-black">University of Tsukuba, Graduate School of Integrated Science and Technology, Life and Earth Sciences, Biology Degree Program, Master's Degree</div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2023.5~</time>
                        <div className="text-lg font-black">Cornerstone College Web & Mobile App Development</div>
                        </div>
                        <hr />
                    </li>

                    <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                        <time className="font-mono italic">2023.6~2023.8</time>
                        <div className="text-lg font-black">Burrard Laptops (volunteer)</div>
                        - Developing the API request components for CRM integration (Java, suitedash).
                        <br></br>
                        - Designing membership links using media queries (WordPress, SCSS).
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default About;
