import React from 'react';

const About = () => {
    return (
        <div className='pl-10 bg-base-100 flex flex-col items-center'>
            <h1 className="mb-5 text-5xl font-bold">About</h1>

            {/* skills */}
            <div className='flex felx-col self-start mb-20'>
                <h2 className="mb-5 text-3xl font-bold">Skills</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>    
                            </tr>
                            </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                            <div className="flex items-center gap-3">
                                <img className='w-7' src="/images/python.svg" alt="python" />
                                <div>
                                    <div className="font-bold">Python</div>
                                </div>
                            </div>
                            </td>
                            <td><div className='w-1/2'>
                            
                            </div></td>
                            <td>★★★★★</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>
                            <div className="flex items-center gap-3">
                                <img className='w-7' src="/images/php.svg" alt="php" />
                                <div>
                                    <div className="font-bold">PHP</div>
                                </div>
                            </div>
                            </td>
                            <td><div className='w-1/2'></div></td>
                            <td>★★★</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>
                            <div className="flex items-center gap-3">
                                <img className='w-7' src="/images/javascript.svg" alt="js" />
                                <div>
                                    <div className="font-bold">Javascript</div>
                                </div>
                            </div>
                            </td>
                            <td><div className='w-1/2'></div></td>
                            <td>★★★★★</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <td>
                            <div className="flex items-center gap-3">
                                <img className='w-7' src="/images/java.svg" alt="java" />
                                <div>
                                    <div className="font-bold">Java</div>
                                </div>
                            </div>
                            </td>
                            <td><div className='w-1/2'></div></td>
                            <td>★★</td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <td>
                            <div className="flex items-center gap-3">
                                <img className='w-7' src="/images/django.svg" alt="django" />    
                                <div>
                                    <div className="font-bold">Django</div>
                                </div>
                            </div>
                            </td>
                            <td><div className='w-1/2'></div></td>
                            <td>★★★★★</td>
                        </tr>

                        {/* row6-1 */}
                        <tr>
                            <td>
                            <div className="flex items-center gap-3">
                                <img className='w-7' src="/images/nodejs-icon.svg" alt="node.js" />    
                                <div>
                                    <div className="font-bold">node.js</div>
                                </div>
                            </div>
                            </td>
                            <td><div className='w-1/2'></div></td>
                            <td>★★★★</td>
                        </tr>

                        {/* row 6-2 */}
                        <tr>
                            <td>
                            <div className="flex items-center gap-3">
                                <img className='w-7' src="/images/react.svg" alt="react" />
                                <div>
                                    <div className="font-bold">React</div>
                                </div>
                            </div>
                            </td>
                            <td><div className='w-1/2'></div></td>
                            <td>★★★★★</td>
                        </tr>

                        {/* row 6-3 */}
                        <tr>
                            <td>
                            <div className="flex items-center gap-3">
                                <img className='w-7' src="/images/nextjs-icon.svg" alt="react" />
                                <div>
                                    <div className="font-bold">Next.js</div>
                                </div>
                            </div>
                            </td>
                            <td><div className='w-1/2'></div></td>
                            <td>★★★★★</td>
                        </tr>

                        {/* row 6-4 */}
                        <tr>
                            <td>
                            <div className="flex items-center gap-3">
                                <img className='w-7' src="/images/react.svg" alt="react" />
                                <div>
                                    <div className="font-bold">React Native</div>
                                </div>
                            </div>
                            </td>
                            <td><div className='w-1/2'></div></td>
                            <td>★★</td>
                        </tr>

                        {/* row 7 */}
                        <tr>
                            <td>
                            <div className="flex items-center gap-3">
                                <img className='w-7' src="/images/laravel.svg" alt="laravel" />
                                <div>
                                    <div className="font-bold">Laravel</div>
                                </div>
                            </div>
                            </td>
                            <td><div className='w-1/2'></div></td>
                            <td>★★★</td>
                        </tr>

                        {/* row 8 */}
                        <tr>
                            <td>
                            <div className="flex items-center gap-3">
                                <img className='w-7' src="/images/flask.svg" alt="flask" />
                                <div>
                                    <div className="font-bold">Flask</div>
                                </div>
                            </div>
                            </td>
                            <td><div className='w-1/2'></div></td>
                            <td>★★★</td>
                        </tr>

                        {/* row 9 */}
                        <tr>
                            <td>
                            <div className="flex items-center gap-3">
                                <img className='w-7' src="/images/pytorch-icon.svg" alt="pytorch" />
                                <div>
                                    <div className="font-bold">Pytorch</div>
                                </div>
                            </div>
                            </td>
                            <td><div className='w-1/2'></div></td>
                            <td>★★★</td>
                        </tr>

                        {/* row 10 */}
                        <tr>
                            <td>
                            <div className="flex items-center gap-3">
                                <img className='h-7' src="/images/mysql.svg" alt="mysql" />
                                <div>
                                    <div className="font-bold">MySQL</div>
                                </div>
                            </div>
                            </td>
                            <td><div className='w-1/2'></div></td>
                            <td>★★★</td>
                        </tr>

                        {/* row 11 */}
                        <tr>
                            <td>
                            <div className="flex items-center gap-3">
                                <img  className='h-7'src="/images/postgresql.svg" alt="postgresql" />
                                <div>
                                    <div className="font-bold">PostgreSQL</div>
                                </div>
                            </div>
                            </td>
                            <td><div className='w-1/2'></div></td>
                            <td>★★★★</td>
                        </tr>

                        {/* row 12 */}
                        <tr>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="font-bold">Other</div>
                                </div>
                            </div>
                            </td>
                            <td><div className='w-1/2'></div></td>
                            <td>HTML, CSS, SCSS, tailwind, TypeScript, Express.js, JQuery, Git, GitHub, AWS(lightsail, ec2), VSC, JupiterNoytebook,
                            Apache, Nginx, Unity, C# etc.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>

            {/* certificate */}
            <div className='flex felx-col self-start mb-20'>
                <h2 className="mb-5 text-3xl font-bold">Certificates</h2>
                <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>TOEIC</td>
                        <td>870 score</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <td>Regular Driver's License</td>
                        <td></td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <td>Financial Planner Level 3</td>
                        <td></td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                        <td>Nissho Bookkeeping Level 2</td>
                        <td></td>
                    </tr>
                    {/* row 5 */}
                    <tr>
                        <td>Real Estate Agent Exam: Passed</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            {/* history */}
            <div className='flex flex-col self-start'>
            <h2 className="mb-5 text-3xl font-bold self-start">History</h2>
                <div className='flex flex-row justify-around max-md:hidden'>
                    <h2 className="mb-5 text-xl font-bold">Education</h2>
                    <h2 className="mb-5 text-xl font-bold">Work</h2>
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
                        <hr />
                    </li>

                    <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                        <time className="font-mono italic">2023.10~</time>
                        <div className="text-lg font-black">Wellness Mons</div>
                        Founded Wellness Mons, a private business. I plan, develop and market this fitness apps.
                        </div>
                        
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default About;
