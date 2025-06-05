import React from 'react';
import aboutImage from "@/assets/images/coding_happy.png";
import Image from 'next/image';

const About = () => {
    return (
        <div 
            className='flex flex-col gap-6 w-full p-5 relative' 
            // style={{backgroundImage: `url(${aboutImage.src})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
        >
            {/* <div className="absolute inset-0 rounded-3xl container mx-auto opacity-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div> */}
            <h2 className="text-5xl text-center" data-aos="fade-down">Who Am I?</h2>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <Image
                    src={aboutImage}
                    alt="Profile Pic"
                    width={500}
                    height={500}
                    className="w-60 lg:w-72 xl:w-92 h-60 lg:h-72 xl:h-92 object-contain border-2 rounded-full"
                     data-aos="fade-right"
                />
                <div className="space-y-6 ">
                    <p className="text-wrap xl:text-xl text-base" data-aos="fade-up">
                    I am a dedicated web developer with experience in creating dynamic and responsive web applications. 
                    </p>
                    <p className="text-wrap xl:text-xl text-base" data-aos="fade-up">
                        Expert in the <strong className="primary-color">MERN stack</strong>, I possess knowledge of{" "}
                        {/* <ul>
                            <li><i className="primary-color">HTML</i></li>
                            <li><i className="primary-color">CSS</i></li>
                            <li><i className="primary-color">Tailwind</i></li>
                            <li><i className="primary-color">JavaScript</i></li>
                            <li><i className="primary-color">TypeScript</i></li>
                            <li><i className="primary-color">React</i></li>
                            <li><i className="primary-color">Next.js</i></li>
                            <li><i className="primary-color">Firebase</i></li>
                            <li><i className="primary-color">Node JS</i></li>
                            <li><i className="primary-color">Express JS</i></li>
                            <li><i className="primary-color">MongoDB</i></li>
                            <li><i className="primary-color">Mongoose</i></li>
                            <li><i className="primary-color">MySQL</i></li>
                        </ul> */}
                        <i className="primary-color">HTML</i>,{" "}
                        <i className="primary-color">CSS</i>,{" "}
                        <i className="primary-color">Tailwind</i>,{" "}
                        <i className="primary-color">JavaScript</i>,{" "}
                        <i className="primary-color">TypeScript</i>,{" "}
                        <i className="primary-color">React</i>,{" "}
                        <i className="primary-color">Next.js</i>,{" "}
                        <i className="primary-color">Firebase</i>,{" "}
                        <i className="primary-color">Node JS</i>,{" "}
                        <i className="primary-color">Express JS</i>,{" "}
                        <i className="primary-color">MongoDB</i>,{" "}
                        <i className="primary-color">Mongoose</i>, and{" "}
                        <i className="primary-color">MySQL</i>. 
                        <br />
                        <br />
                        My passion for coding provides a profound sense of fulfillment. Furthermore, I am eager to expand my knowledge of these technologies and explore additional related fields in the future.
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default About;