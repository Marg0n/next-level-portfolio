/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import clsx from "clsx";
import { ReactNode } from "react";
//* react icons
import {
  createLucideIcon,
  // Heart,
  Timer,
  Facebook,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import { calculateReadingTime } from "@/utils/readingTime";
import winterCloth from "@/assets/images/winter_cloth.jpg";

//* Some helper props
const validImage =
  typeof image === "string" && image.trim().length > 0
    ? image
    : null;

//* Define types for the props
interface CustomCardProps {
  description?: string;
  icon?: ReactNode[]; //? Allow Optional icon prop to be a ReactNode (string, element, etc.)
  handleAnything?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>,
  ) => void; //? Supports both click and form submit events
  className?: string; //? Allow className to be passed as a prop
  image?: string | validImage; //? Only allow string URLs for image prop
  genre?: string;
  designation?: string;
  title?: string;
  facebook?: boolean;
  x?: boolean;
  linkedin?: boolean;
  link?: string; //? Optional link prop for Learn More button
  buttonText?: string; //? Optional button text prop
  // textArray?: string[]; //? textArray={["Line 1", "Line 2", "Line 3"]}
  textArray?: { value: string; className?: string }[]; //? textArray={[{ value: "John Doe", className: "text-white" }, ... ]}
}

//* creating x logo
const XIcon = createLucideIcon("X", [
  [
    "path",
    {
      key: "unique-path-key-1",
      d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      stroke: "none",
      fill: "currentColor",
    },
  ],
]);

export const AnimatedCardZoomInWithDesc: React.FC<CustomCardProps> = ({
  description = ``,
  // icon,
  // handleAnything,
  className = ``,
  image,
  genre,
  designation,
  title,
}) => {
  //* calculating reading time
  const readingTime = calculateReadingTime(description);

  return (
    <div
      className={clsx(
        "w-full md:w-96 shadow-md h-[350px] hover:scale-[1.05] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group",
        className,
      )}
    >
      {/*  icons  */}
      <div className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]">
        {/* <Heart className="text-[1.1rem] dark:text-[#abc2d3] text-gray-600" /> */}
        <div className="flex items-center gap-[5px]">
          <Timer className="dark:text-orange-600 text-orange-700 text-[1.1rem]" />
          <p className="text-[1rem] dark:text-orange-600 text-orange-700">
            <em>{readingTime ? readingTime : 5} min read</em>
          </p>
        </div>
      </div>

      {/*  image  */}
      <Image
        src={
          image ??
          "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        } //? If image is defined (not null or undefined), it will be used as the source of the image if not then the fallback URL will be used.
        alt="animated_card"
        className="w-full h-[60%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out"
        width={750}
        height={450}
      />

      {/*  texts  */}
      <div className="absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full">
        <p className="text-[1rem] dark:text-[#abc2d3]/80 uppercase text-gray-600">
          {genre ? genre : "Travel"}
        </p>
        <h3 className="text-[1.4rem] dark:text-[#abc2d3] font-bold text-gray-900">
          {title ? title : "Discover the sea"}
        </h3>
        <p className="text-[0.9rem] dark:text-[#abc2d3]/90 text-gray-600 mt-2">
          by {designation ? designation : "John Doe"}
        </p>
      </div>
    </div>
  );
};

export const AnimatedCardHoverButtonWithPic: React.FC<CustomCardProps> = ({
  description = ``,
  className = ``,
  image,
  title,
  buttonText,
  link,
}) => {
  return (
    <div
      className={clsx(
        "p-4 md:p-0 w-full md:w-96 h-96 relative overflow-hidden group cursor-pointer rounded-md",
        className,
      )}
    >
      {/*  image  */}
      <Image
        src={
          image ??
          "https://img.freepik.com/free-photo/close-up-adorable-kitten-couch_23-2150782439.jpg?t=st=1728056952~exp=1728060552~hmac=6c6249502066e36b15e7d040c623af0bc46dd1dbda0274440f8a8de2b85288ca&w=360"
        }
        alt="animated_card"
        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
        width={360}
        height={360}
      />

      {/*  text  */}
      <div className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize wrap-anywhere p-4">
          {title ?? "domestic cat"}
        </h1>
        <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">
          {description
            ? description.slice(0, 50)
            : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        </p>
        <button className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">
          <a
            href={link ?? "#"}
            // className="inline-block mt-4 text-blue-500 hover:underline"
            target="_blank"
          >
            {buttonText ?? "View Details"}
          </a>
        </button>
      </div>

      {/*  bottom shadow  */}
      <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
    </div>
  );
};

export const AnimatedCardForPerson: React.FC<CustomCardProps> = ({
  className = ``,
  image,
  designation,
  title,
  facebook = true,
  x = false,
  linkedin = true,
  icon = [],
}) => {
  return (
    <div
      className={clsx(
        "p-4 md:p-0 w-full md:w-96 h-96 rounded-md relative group overflow-hidden",
        className,
      )}
    >
      {/*  image  */}
      <Image
        src={
          image ??
          "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1728139729~exp=1728143329~hmac=dd0870841ecbe138afdb639fee17206241a94b02b17e1e681ad16eba38f0bd7b&w=996"
        }
        alt={title ?? "Person Image"}
        className="w-full h-[350px] object-cover"
        width={996}
        height={350}
      />

      {/*  texts  */}
      <div className="flex flex-col items-center justify-center backdrop-blur-md text-white absolute bottom-0 w-full pt-[15px] pb-[30px] translate-y-[200px] group-hover:translate-y-0 transition-all duration-[400ms] overflow-hidden">
        <h3 className="text-[1.7rem] translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 font-bold tracking-[5px] leading-[30px] opacity-0 group-hover:opacity-100 px-3 text-center">
          {title ?? "Sokhorio Margon D' Costa"}
        </h3>
        <p className="text-[1rem] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
          {designation ?? "Software Engineer"}
        </p>

        {/*  socials icons  */}
        <div className="flex items-center gap-[20px] mt-[15px]">
          <div
            className={clsx(
              "translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100",
              !facebook && "hidden",
            )}
          >
            <Facebook className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
          </div>
          <div
            className={clsx(
              "translate-y-[100px] group-hover:translate-y-0 transition-all duration-[800ms] opacity-0 group-hover:opacity-100",
              !x && "hidden",
            )}
          >
            <XIcon className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
          </div>
          <div
            className={clsx(
              "translate-y-[100px] group-hover:translate-y-0 transition-all duration-[1100ms] opacity-0 group-hover:opacity-100",
              !linkedin && "hidden",
            )}
          >
            <Linkedin className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
          </div>
          {/* Custom icons (optional) */}
          {icon?.map((IconEl, idx) => (
            <button
              key={idx}
              type="button"
              className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[1400ms] opacity-0 group-hover:opacity-100 cursor-pointer"
              onClick={() => console.log(`Custom icon ${idx} clicked`)}
            >
              {React.isValidElement(IconEl)
                ? React.cloneElement(IconEl as React.ReactElement<any>, {
                    className: clsx(
                      "text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200",
                      (IconEl.props as any)?.className, // allow merging user-passed classes
                    ),
                  })
                : IconEl}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
//? React.cloneElement: It gives you control over props of children passed in as JSX. Very useful when children are components like icons where you want to enforce default behavior.

export const AnimatedCardFlip: React.FC<CustomCardProps> = ({
  className = ``,
  image,
  description,
  title,
  link,
  buttonText,
}) => {
  return (
    <div
      className={clsx(
        "group [perspective:1000px] p-4 md:p-0 h-96 w-full md:w-96",
        className,
      )}
    >
      <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden]">
          <Image
            src={
              typeof image === "string" && image.trim().length > 0  
                ? image
                : "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063136.jpg?t=st=1728142095~exp=1728145695~hmac=01edb1d4b68f37689510f834a442804bd4fb7bf68d8f795d7d30f7cc87f79a8b&w=996"
            }
            alt={title ?? "animated_card"}
            className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg"
            width={996}
            height={350}
          />
          <h2 className="text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold text-white absolute bottom-5 left-5">
            {title ?? "Marketing Strategy"}
          </h2>
        </div>

        {/* Back Side */}
        <div className="absolute w-full dark:bg-slate-800 h-full bg-white rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]">
          <h2 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-gray-800 mb-4">
            {title ?? "Marketing Strategy"}
          </h2>
          <p className="text-gray-600 dark:text-[#abc2d3]/80">
            {description ??
              `A marketing strategy is a plan to reach target customers, promote
            products, and grow business. It uses tools like ads, social media,
            and content to build brand awareness and drive sales.`}
          </p>
          <a
            href={link ?? "#"}
            className="inline-block mt-4 text-blue-500 hover:underline"
            target="_blank"
          >
            {buttonText ?? "Learn More"}
          </a>
        </div>
      </div>
    </div>
  );
};

export const AnimatedCardWithImageTilt: React.FC<CustomCardProps> = ({
  className = ``,
  image,
  textArray = [
    { value: "The" },
    { value: "Winter", className: "text-yellow-500" },
    { value: "Collection" },
  ],
}) => {
  return (
    <div
      className={clsx(
        "p-4 md:p-0 h-96 w-full md:w-96 overflow-hidden rounded-md relative cursor-pointer group",
        className,
      )}
    >
      {/*  image  */}
      <Image
        src={image ?? winterCloth}
        alt="animated_card"
        className="w-full h-full object-cover group-hover:scale-[1.15] group-hover:rotate-[8deg] transition-all duration-300 ease-out"
        width={750}
        height={450}
      />

      {/*  texts  */}
      <div className="absolute bottom-0 left-0 py-[10px] px-[20px]">
        {/* option 1 */}
        {/* <h3 className="text-[2rem] font-bold text-white">{text1}</h3>
        <h3
          className={
            "text-[2rem] font-bold " +
            (text2Class ? text2Class : "text-yellow-500")
          }
        >
          {text2}
        </h3>
        <h3 className="text-[2rem] font-bold text-white">{text3}</h3> */}

        {/* option 2 */}
        {/* {textArray?.map((line, index) => (
          <h3
            key={index}
            className={clsx("text-[2rem] font-bold", {
              "text-yellow-500": index === 1, //? make second line yellow
              "text-white": index !== 1,
            })}
          >
            {line}
          </h3>
        ))} */}

        {/* option 3 */}
        {textArray?.map((item, index) => (
          <h3
            key={index}
            className={clsx(
              "text-[2rem] font-bold",
              item?.className ?? "text-white",
            )}
          >
            {item?.value}
          </h3>
        ))}
      </div>
    </div>
  );
};

export const AnimatedCardOnlyDetailsWithZoomIn: React.FC<CustomCardProps> = ({
  className = ``,
  image,
  description,
  title,
}) => {
  return (
    <div
      className={clsx(
        "p-4 md:p-0 h-96 w-full md:w-96 shadow-md transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group",
        className,
      )}
    >
      <Image
        src={
          image ??
          "https://img.freepik.com/free-photo/beautiful-rainbow-nature_23-2151498366.jpg?t=st=1728230691~exp=1728234291~hmac=4670c1df1a791e3506bdebcdc7aecc5d09bfd2ed8fff51551b39ad3f5f237899&w=996"
        }
        alt="animated_card"
        className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300"
        width={750}
        height={450}
      />

      <div className="w-full h-full absolute top-0 left-0 backdrop-blur-lg flex items-center justify-center flex-col px-[20px] opacity-0 transition-all duration-300 group-hover:opacity-100">
        <h2 className="text-[1.5rem] text-white font-bold text-center leading-[30px] capitalize">
          {title ?? "Beautiful rainbow in nature"}
        </h2>
        <p className="text-[1rem] text-white text-center mt-3 opacity-85">
          {description ??
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet"}
        </p>
      </div>
    </div>
  );
};
