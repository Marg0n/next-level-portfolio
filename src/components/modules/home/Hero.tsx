import { Download, FileText, View } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      {/* intro */}
      <div className="xl:ml-56 lg:ml-32 lg:pl-0 pl-5 flex flex-col justify-center items-start h-full">
        <h3 className="banner-greeting dark2" data-aos="fade-down">
          Hi, I am
        </h3>
        <h1
          className="banner-title dark1 text-5xl text-pretty lg:text-8xl w-full"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          Sokhorio Margon D<span className="primary-color">&apos;</span> Costa
        </h1>
        <p className="dark3 text-wrap" data-aos="fade-up">
          I am a <strong className="primary-color">MERN stack</strong> web
          developer. I am knowledgeable with{" "}
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
          <i className="primary-color">MongoDB</i> and{" "}
          <i className="primary-color">MySQL</i>. I love coding, as it gives me
          the feelings of fulfillment. In the future, I also love to learn, know
          and work more about these and the similar technologies.
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-start items-start gap-4 lg:ml-32 xl:ml-56 lg:pl-0 pl-5">
        <div className="gap-4 flex  md:flex-row justify-start items-center">
          <Link
            href="https://drive.google.com/file/d/1zqhoaQmDb2hKXJwM24wm3cjEraG0_Ljx/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-customized relative  flex-nowrap">
              <View />
              CV
            </button>
          </Link>
          <Link
            href="https://drive.google.com/uc?export=download&id=1zqhoaQmDb2hKXJwM24wm3cjEraG0_Ljx"
            rel="noopener noreferrer"
          >
            <button className="btn !btn-circle !bg-[#fd6e0a] !bg-opacity-40 !animate-pulse hover:!border-4 hover:!border-x-[#fd6e0a] hover:!border-y-[cornflowerblue] hover:!animate-none hover:!bg-white">
              <Download size={25} />
            </button>
          </Link>
        </div>

        <div className="gap-4  flex md:flex-row justify-start items-center ">
          <Link
            href="https://drive.google.com/file/d/182h1SzIacu1unDzos_O_uFXxLlRYHPNq/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn flex-nowrap">
              <FileText />
              Resume
            </button>
          </Link>
          <Link
            href="https://drive.google.com/uc?export=download&id=182h1SzIacu1unDzos_O_uFXxLlRYHPNq"
            rel="noopener noreferrer"
          >
            <button className="btn !btn-circle !bg-[#fd6e0a] !bg-opacity-40 !animate-pulse hover:!border-4 hover:!border-x-[#fd6e0a] hover:!border-y-[cornflowerblue] hover:!animate-none hover:!bg-white">
              <Download size={25} />
            </button>
          </Link>
        </div>

        

              
      </div>
    </div>
  );
};

export default Hero;
