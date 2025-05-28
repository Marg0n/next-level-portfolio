import React from "react";
import aboutImage from "@/assets/images/jacky-who-am-i.png";
import tired from "@/assets/images/tired-cleaning.png";
import Image from "next/image";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div
      className="flex justify-center items-center w-full h-full m-4"
      style={{ perspective: "1000px" }} //! critical for 3D effect
    >
      {/* <Image
        src={aboutImage}
        alt="Loading..."
        width={100}
        height={100}
        className={`${styles["coin-wobble"]} w-60 lg:w-72 xl:w-92 h-60 lg:h-72 xl:h-92 object-contain border-2 rounded-full`}
      /> */}
      <div className={styles["coin"]}>
        {/* Front face */}
        <div className={styles["coin-face"]}>
          <Image
            src={aboutImage}
            alt="Coin Front"
            fill
            className="object-cover rounded-full"
          />
        </div>

        {/* Side edge */}
        {/* <div className={styles["coin-edge"]}></div> */}

        {/* Edge slices */}
        {/* {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={styles.edgeSlice}
            style={{ transform: `rotateX(${i * (360 / 40)}deg) translateZ(75px)` }}
          />
        ))} */}

        {/* Back face (optional) */}
        <div className={styles["coin-face"] + " " + styles["coin-back"]}>
          <Image
            src={tired}
            alt="Coin Back"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
