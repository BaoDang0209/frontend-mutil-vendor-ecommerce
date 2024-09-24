/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PaginationNumber = ({ state, shape, className, numberClassName, text = "1" }) => {
  return (
    <div
      className={`w-10 h-10 overflow-hidden ${state === "focused" ? "shadow-focus-ring-4px-primary-100" : ""} ${
        shape === "circle" ? "rounded-[20px]" : "rounded-lg"
      } ${["focused", "hover-active"].includes(state) ? "bg-primary-50" : ""} ${className}`}
    >
      <div
        className={`w-10 flex items-center p-3 h-10 justify-center relative ${
          shape === "circle" ? "rounded-[20px]" : "rounded-lg"
        }`}
      >
        <div
          className={`font-text-sm-medium w-fit mt-[-3.00px] tracking-[var(--text-sm-medium-letter-spacing)] text-[length:var(--text-sm-medium-font-size)] [font-style:var(--text-sm-medium-font-style)] font-[number:var(--text-sm-medium-font-weight)] text-center whitespace-nowrap mb-[-1.00px] leading-[var(--text-sm-medium-line-height)] relative ${
            state === "default" ? "text-gray-500" : "text-primary-600"
          } ${numberClassName}`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

PaginationNumber.propTypes = {
  state: PropTypes.oneOf(["hover-active", "focused", "default"]),
  shape: PropTypes.oneOf(["circle", "square"]),
  text: PropTypes.string,
};
