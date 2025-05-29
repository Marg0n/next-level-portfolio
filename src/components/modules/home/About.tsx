import React from 'react';
// import aboutImage from "@/assets/images/jacky-who-am-i.png";
// import Image from 'next/image';

const About = () => {
    return (
        <div 
            className='flex flex-col gap-6 w-full h-[500px] p-5 relative' 
            // style={{backgroundImage: `url(${aboutImage.src})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
        >
            {/* <div className="absolute inset-0 rounded-3xl container mx-auto opacity-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div> */}
            <h2 className="text-5xl text-center" data-aos="fade-down">Who Am I?</h2>

                {/* <div>
                    <Image
                        src={aboutImage}
                        alt="Profile Pic"
                        width={500}
                        height={500}
                        className="w-60 lg:w-72 xl:w-92 h-60 lg:h-72 xl:h-92 object-contain border-2 rounded-full"
                    />
                </div> */}
            <>
                <p className="text-wrap xl:text-xl text-base" data-aos="fade-up">
                I am a passionate web developer with experience in building dynamic and responsive web applications.
                </p>
                <p className="text-wrap xl:text-xl text-base" data-aos="fade-up">
                    I am a <strong className="primary-color">MERN stack</strong> web
                    developer. I am knowledgeable with{" "}
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
                    I love coding, as it gives
                    me the feelings of fulfillment. In the future, I also love to learn,
                    know and work more about these and the similar technologies.
                </p>
            </>
            
        </div>
    );
};

export default About;