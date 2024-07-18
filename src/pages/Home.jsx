// src/pages/Home.jsx
import React from 'react';

const Home = () => {
    return (
        <main className="p-8">
            <section className="text-center">
                <h2 className="text-3xl mb-4">Welcome to National Institute of Technology, Jamshedpur</h2>
                <p className="text-lg">Our dispensary is dedicated to providing the best outpatient care for college students, employees, and their dependents. We offer various services to ensure your health and well-being.</p>
            </section>

            <section id="feature" className="w-full px-10 my-8">
                <div className="container mx-auto px-2.5">
                    <div className="flex flex-wrap items-center shadow-lg rounded-lg bg-white overflow-hidden">
                        <a target="_self" rel="noopener noreferrer" className="quick_link_container flex flex-col items-center justify-center p-5 w-1/5" href="https://www.nitjsr.ac.in/MediaCoverage" style={{ backgroundColor: 'rgb(245, 248, 253)' }}>
                            <img alt="img" src="/a.png" className="thumbnail w-18 h-18" />
                            <h3 className="text-xl">Media Corner</h3>
                            <p className="hidden lg:block text-center">NIT JSR in news</p>
                            <i className="right_arrow hidden lg:block" style={{ display: 'inline-block' }}>
                                <svg fill="currentColor" height="40" width="40" viewBox="0 0 1792 1792" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                                    <path d="M1728 893q0 14-10 24l-384 354q-16 14-35 6-19-9-19-29v-224h-1248q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h1248v-224q0-21 19-29t35 5l384 350q10 10 10 23z"></path>
                                </svg>
                            </i>
                        </a>

                        <a target="_self" rel="noopener noreferrer" className="quick_link_container flex flex-col items-center justify-center p-5 w-1/5" href="https://www.nitjsr.ac.in/Students/Placements" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                            <img alt="img" src="/b.svg" className="thumbnail w-18 h-18" />
                            <h3 className="text-xl">Placements</h3>
                            <p className="hidden lg:block text-center">Placement section</p>
                            <i className="right_arrow hidden lg:block" style={{ display: 'inline-block' }}>
                                <svg fill="currentColor" height="40" width="40" viewBox="0 0 1792 1792" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                                    <path d="M1728 893q0 14-10 24l-384 354q-16 14-35 6-19-9-19-29v-224h-1248q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h1248v-224q0-21 19-29t35 5l384 350q10 10 10 23z"></path>
                                </svg>
                            </i>
                        </a>

                        <a target="_self" className="quick_link_container flex flex-col items-center justify-center p-5 w-1/5" href="https://www.nitjsr.ac.in/internalLinks" style={{ backgroundColor: 'rgb(245, 248, 253)' }}>
                            <img alt="img" src="/c.png" className="thumbnail w-18 h-18" />
                            <h3 className="text-xl">Internal Links</h3>
                            <p className="hidden lg:block text-center">Official institute link</p>
                            <i className="right_arrow hidden lg:block" style={{ display: 'inline-block' }}>
                                <svg fill="currentColor" height="40" width="40" viewBox="0 0 1792 1792" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                                    <path d="M1728 893q0 14-10 24l-384 354q-16 14-35 6-19-9-19-29v-224h-1248q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h1248v-224q0-21 19-29t35 5l384 350q10 10 10 23z"></path>
                                </svg>
                            </i>
                        </a>

                        <a target="_self" className="quick_link_container flex flex-col items-center justify-center p-5 w-1/5" href="https://www.nitjsr.ac.in/Notices/Students" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                            <img alt="img" src="/d.png" className="thumbnail w-18 h-18" />
                            <h3 className="text-xl">Notices</h3>
                            <p className="hidden lg:block text-center">Notices and office orders</p>
                            <i className="right_arrow hidden lg:block" style={{ display: 'inline-block' }}>
                                <svg fill="currentColor" height="40" width="40" viewBox="0 0 1792 1792" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                                    <path d="M1728 893q0 14-10 24l-384 354q-16 14-35 6-19-9-19-29v-224h-1248q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h1248v-224q0-21 19-29t35 5l384 350q10 10 10 23z"></path>
                                </svg>
                            </i>
                        </a>

                        <a target="_self" className="quick_link_container flex flex-col items-center justify-center p-5 w-1/5" href="https://www.nitjsr.ac.in/Alumni" style={{ backgroundColor: 'rgb(245, 248, 253)' }}>
                            <img alt="img" src="/e.png" className="thumbnail w-18 h-18" />
                            <h3 className="text-xl">Alumni Corner</h3>
                            <p className="hidden lg:block text-center">Alumni section of NIT JSR</p>
                            <i className="right_arrow hidden lg:block" style={{ display: 'inline-block' }}>
                                <svg fill="currentColor" height="40" width="40" viewBox="0 0 1792 1792" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                                    <path d="M1728 893q0 14-10 24l-384 354q-16 14-35 6-19-9-19-29v-224h-1248q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h1248v-224q0-21 19-29t35 5l384 350q10 10 10 23z"></path>
                                </svg>
                            </i>
                        </a>
                    </div>
                </div>
            </section>

            <section id="socialFundraising" className="w-full px-10 my-8">
                <div className="container mx-auto px-2.5">
                    <div className="flex flex-wrap">
                        <div className="md:w-1/2 w-full px-2.5 mb-4">
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <h2 className="text-xl font-semibold mb-4 bg-blue-900 text-white p-2">Director's Corner</h2>
                                <div className="director_content_container">
                                    <p className="text-justify">
                                        <img src="/director.jpg" alt="director" className="inline-block mr-4 w-35 h-40"  />
                                       <p> It is a privilege and honour for me to have led the NIT Jamshedpur as a Director of the Institution. NIT Jamshedpur has a rich legacy of more than sixty dedicated years of service to the nation and its pride of Jharkhand. NIT Jamshedpur takes extreme pride in the fact that it has been occupying a unique position in imparting technological education to Indian youth. Since its inception, the institute has had a vision to provide quality technical education and to facilitate scientific and technological research, coupled with a mission to develop human potential to its zenith with excellence in teaching and high quality research.
                                    
                                       </p>                                       
                                    </p>
                                </div>
                                <div className="director_content">
                                    <a className="learn__more-btn inline-flex items-center mt-4 text-blue-600 hover:underline" href="https://www.nitjsr.ac.in/Administration/Director">
                                        <span className="hyphen mr-2">-</span>
                                        <span className="btn_text">Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 w-full px-2.5 mb-4">
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <h2 className="text-xl font-semibold mb-4 bg-blue-900 text-white p-2">Our Vision</h2>
                                <p className="text-justify">To be one of the premier technical institutions for its academic excellence and innovative research to meet the future needs of the society.</p>
                                <h2 className="text-xl font-semibold mt-4 mb-2 bg-blue-900 text-white p-2">Our Mission</h2>
                                <ul className="list-disc pl-5">
                                    <li className="mb-2">To build conducive environment for learning and creativity.</li>
                                    <li className="mb-2">To train students to become technically competent professionals and socially responsible citizens.</li>
                                    <li className="mb-2">To develop innovative products and technologies for the betterment of the society.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
