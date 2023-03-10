import React from "react";
import { discount, robot } from "../assets";
import styles from "../style.js";

const stats = () => {
  return (
    <section
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      id="home"
    >
      <div
        className={`flex-1 ${styles.flexStart} 
        flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px" />
        </div>
      </div>
    </section>
  );
};

export default stats;
