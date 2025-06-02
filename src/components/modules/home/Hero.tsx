"use client";

import Pic from "@/assets/images/SMD.png";
import CustomButton from "@/components/shared/buttons/CustomButton";
import { Button } from "@/components/ui/button";
import { useAOS } from "@/hooks/useAOS";
import { Activity, Download, FileText, View } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  // AOS animation useEffect
  // useEffect(() => {
  //   AOS.init({
  //     duration: 500,
  //     once: true,
  //     mirror: true,
  //   });

  //   const handleScroll = () => {
  //     AOS.refresh();
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  useAOS();

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:gap-10 gap-4 w-full max-h-screen p-5 ">
      {/* writings */}
      <div className="flex flex-col gap-6 w-full lg:w-2/3">
        {/* intro */}
        <div className="flex flex-col justify-center items-start gap-6 h-full">
          <h3 className="text-2xl font-semibold" data-aos="fade-down">
            Hi, I am
          </h3>
          <h1
            className="text-5xl text-pretty lg:text-7xl xl:text-8xl w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Sokhorio Margon D<span className="primary-color">&apos;</span> Costa
          </h1>
          {/* <p className="text-wrap xl:text-xl text-base" data-aos="fade-up">
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
            <i className="primary-color">MongoDB</i>,{" "}
            <i className="primary-color">Mongoose</i>, and{" "}
            <i className="primary-color">MySQL</i>. I love coding, as it gives
            me the feelings of fulfillment. In the future, I also love to learn,
            know and work more about these and the similar technologies.
          </p> */}
        </div>

        {/* buttons */}
        <div
          className="flex md:flex-row flex-col justify-start items-start gap-4"
          data-aos="fade-up"
        >
          {/* cv */}
          <div className="flex relative md:flex-row justify-start items-center">
            <div className="flex items-center space-x-4">
              <Link
                href="https://drive.google.com/file/d/1zqhoaQmDb2hKXJwM24wm3cjEraG0_Ljx/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomButton
                  textName={`CV`}
                  icon={<View />}
                  className="flex-nowrap min-w-28 p-1.5!"
                />
              </Link>
              <Link
                href="https://drive.google.com/uc?export=download&id=1zqhoaQmDb2hKXJwM24wm3cjEraG0_Ljx"
                rel="noopener noreferrer"
                className="p-[2px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  transition-all duration-300"
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <Download size={25} />
                </Button>
              </Link>
            </div>

            <span className="absolute left-28">
              <Activity size={22} />
            </span>
          </div>

          {/* resume */}
          <div className="relative flex md:flex-row justify-start items-center ">
            <div className="flex items-center space-x-4">
              <Link
                href="https://drive.google.com/file/d/182h1SzIacu1unDzos_O_uFXxLlRYHPNq/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomButton
                  textName={`Resume`}
                  icon={<FileText />}
                  className="flex-nowrap min-w-28 p-1.5!"
                />
              </Link>
              <Link
                href="https://drive.google.com/uc?export=download&id=182h1SzIacu1unDzos_O_uFXxLlRYHPNq"
                rel="noopener noreferrer"
                className="p-[2px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  transition-all duration-300"
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <Download size={25} />
                </Button>
              </Link>
            </div>

            <span className="absolute left-28">
              <Activity size={22} />
            </span>
          </div>
        </div>
      </div>

      {/* image */}
      <div
        className="lg:w-1/3 flex items-center justify-center"
        data-aos="fade"
        data-aos-duration="2000"
      >
        <div className="p-[3px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <Image
            src={Pic}
            alt="Profile Pic"
            width={500}
            height={500}
            className="w-60 lg:w-72 xl:w-92 h-60 lg:h-72 xl:h-92 object-contain border-2 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
