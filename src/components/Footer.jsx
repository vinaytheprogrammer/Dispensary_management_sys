import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-950 py-5">
            <div className="container mx-auto max-w-7xl px-1">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-1/3 text-center lg:text-left  p-10 ">
                        <a href="/" className="inline-block mb-2">
                            <img className="w-26 h-28 mx-auto lg:mx-0" alt="logo" src="/logo.png" />
                        </a>
                        <p className="text-white text-2xl font-bold">National Institute of Technology, Jamshedpur</p>
                        <div className="text-white flex items-center justify-center lg:justify-start my-2">
                            <svg className="w-7 h-7 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
                            </svg>
                            Adityapur, Jamshedpur, Jharkhand 831014
                        </div>
                        <div className="flex justify-center lg:justify-start space-x-2 my-5">
                            <a href="https://www.facebook.com/NITJamshedpurOfficial/" target="_blank" rel="noreferrer" className="text-white">
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/nitjamshedpur_official/" target="_blank" rel="noreferrer" className="text-white">
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                </svg>
                            </a>
                            <a href="https://twitter.com/jamshedpur_nit" target="_blank" rel="noreferrer" className="text-white">
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/channel/UCjiZyMKfBnK4-JYfyz1dG3A" target="_blank" rel="noreferrer" className="text-white">
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M549.655 124.083c-6.281-23.65-24.764-42.227-48.311-48.502C456.499 64 288 64 288 64S119.501 64 74.656 75.581c-23.547 6.276-42.03 24.852-48.311 48.502-11.516 43.386-11.516 134.101-11.516 134.101s0 90.715 11.516 134.101c6.281 23.65 24.764 42.227 48.311 48.502C119.501 448 288 448 288 448s168.499 0 213.344-11.581c23.547-6.276 42.03-24.852 48.311-48.502 11.516-43.386 11.516-134.101 11.516-134.101s0-90.715-11.516-134.101zm-317.87 213.312V174.606L402.049 256 231.785 337.395z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 mb-6 lg:mb-0 p-10">
                        <h4 className="text-white text-center lg:text-left mb-2 text-1xl font-bold">Quick Links</h4>
                        <ul className="list-none text-center lg:text-left space-y-2">
                            <li><a href="/" className="text-white hover:text-orange-500">Home</a></li>
                            <li><a href="https://nitjsr.ac.in/Institute/About_NITJSR" className="text-white hover:text-orange-500">About Us</a></li>
                            <li><a href="https://nitjsr.ac.in/Recruitments" className="text-white hover:text-orange-500">Recruitments</a></li>
                            <li><a href="https://nitjsr.ac.in/Students/Student-Activities" className="text-white hover:text-orange-500">Student-Activities</a></li>
                            <li><a href="https://sites.google.com/nitjsr.ac.in/centrallibrary/home" className="text-white hover:text-orange-500">Central Library</a></li>
                            <li><a href="https://nitjsr.ac.in/Students/Anti-Ragging" className="text-white hover:text-orange-500">Anti-Ragging</a></li>
                            <li><a href="https://nitjsr.ac.in/academic/Departments" className="text-white hover:text-orange-500">Departments</a></li>
                            
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/3 mb-6 lg:mb-0 p-10">
                        <h4 className="text-white text-center lg:text-left mb-2 text-1xl font-bold">Contact</h4>
                        <div className="text-center lg:text-left">
                            <a href="mailto:registrar@nitjsr.ac.in" className="text-white flex items-center justify-center lg:justify-start mb-2">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M502.3 190.8L327.4 338.7c-21.9 18.9-53.9 18.9-75.7 0L9.7 190.8C3.9 185.8 0 178.5 0 170.7c0-20.5 23.4-32.7 40.6-19.9l175.5 147.1c13.4 11.3 32.7 11.3 46.1 0l175.5-147.1c17.2-12.8 40.6-.6 40.6 19.9 0 7.8-3.9 15.1-9.7 20.1zM480 240c-8.8 0-16 7.2-16 16v144c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V256c0-8.8-7.2-16-16-16s-16 7.2-16 16v144c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V256c0-8.8-7.2-16-16-16z"></path>
                                </svg>
                                registrar@nitjsr.ac.in
                            </a>
                            <a href="tel:+916572462737" className="text-white flex items-center justify-center lg:justify-start mb-2">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M493.4 24.6l-104-24c-11.3-2.6-23.2.3-31.5 7.7l-48 40c-10.4 8.7-14.3 22.9-10.3 35.8l30.7 98.1c-44.2 21.5-95.8 64.3-127.7 96.3-32 31.9-74.8 83.5-96.3 127.7L74.6 316c-12.8-4-27.1-.2-35.8 10.3l-40 48c-7.4 8.3-10.3 20.2-7.7 31.5l24 104C18.5 508.2 26.7 512 35 512c206 0 377-171 377-377 0-8.3-3.8-16.5-10.6-21.9z"></path>
                                </svg>
                                +91-657-2462737
                            </a>
                        </div>
                        <h5 className="text-white text-center lg:text-left mt-3 text-1xl font-bold">Working Hours</h5>
                        <div className="text-white text-center lg:text-left">
                            <div>Monday - Friday</div>
                            <div>09:00 AM - 05:00 PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
