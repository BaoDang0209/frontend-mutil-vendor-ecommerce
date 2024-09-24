/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Circle245 } from "../../icons/Circle245";

export const ButtonBase = ({
  size,
  icon,
  className,
  override = <Circle245 className="!relative !w-5 !h-5" color="white" />,
  textClassName,
  text = "Button CTA",
  textClassNameOverride,
  icon1 = <Circle245 className="!relative !w-5 !h-5" color="white" />,
  divClassName,
  dotClassName,
  circle245Color = "white",
  icon2 = <Circle245 className="!relative !w-5 !h-5" color={circle245Color} />,
}) => {
  return (
    <div
      className={`border border-solid border-primary-600 inline-flex items-center shadow-shadow-xs overflow-hidden rounded-lg justify-center bg-primary-600 relative ${
        size === "two-xl" && ["dot", "leading", "trailing"].includes(icon) ? "gap-3" : "gap-2"
      } ${
        (icon === "dot" && size === "lg") ||
        (icon === "false" && size === "lg") ||
        (icon === "leading" && size === "lg") ||
        (icon === "trailing" && size === "lg")
          ? "px-[18px] py-2.5"
          : (icon === "dot" && size === "xl") ||
            (icon === "false" && size === "xl") ||
            (icon === "leading" && size === "xl") ||
            (icon === "trailing" && size === "xl")
          ? "px-5 py-3"
          : (icon === "dot" && size === "two-xl") ||
            (icon === "false" && size === "two-xl") ||
            (icon === "leading" && size === "two-xl") ||
            (icon === "trailing" && size === "two-xl")
          ? "px-7 py-4"
          : (icon === "dot" && size === "sm") ||
            (icon === "false" && size === "sm") ||
            (icon === "leading" && size === "sm") ||
            (icon === "trailing" && size === "sm")
          ? "px-3.5 py-2"
          : size === "md" && icon === "only"
          ? "p-2.5"
          : size === "lg" && icon === "only"
          ? "p-3"
          : size === "xl" && icon === "only"
          ? "p-3.5"
          : icon === "only" && size === "two-xl"
          ? "p-4"
          : size === "sm" && icon === "only"
          ? "p-2"
          : "px-4 py-2.5"
      } ${className}`}
    >
      {icon === "leading" && <>{override}</>}

      {icon === "only" && <>{icon2}</>}

      {icon === "dot" && (
        <div className={`w-2.5 h-2.5 relative ${textClassNameOverride}`}>
          <div className={`w-2 left-px top-px h-2 rounded bg-white relative ${dotClassName}`} />
        </div>
      )}

      {["dot", "false", "leading", "trailing"].includes(icon) && (
        <div
          className={`w-fit mt-[-1.00px] text-white whitespace-nowrap relative ${
            ["lg", "xl"].includes(size)
              ? "font-text-md-medium"
              : size === "two-xl"
              ? "font-text-lg-medium"
              : "font-text-sm-medium"
          } ${
            ["lg", "xl"].includes(size)
              ? "tracking-[var(--text-md-medium-letter-spacing)]"
              : size === "two-xl"
              ? "tracking-[var(--text-lg-medium-letter-spacing)]"
              : "tracking-[var(--text-sm-medium-letter-spacing)]"
          } ${
            ["lg", "xl"].includes(size)
              ? "text-[length:var(--text-md-medium-font-size)]"
              : size === "two-xl"
              ? "text-[length:var(--text-lg-medium-font-size)]"
              : "text-[length:var(--text-sm-medium-font-size)]"
          } ${
            ["lg", "xl"].includes(size)
              ? "[font-style:var(--text-md-medium-font-style)]"
              : size === "two-xl"
              ? "[font-style:var(--text-lg-medium-font-style)]"
              : "[font-style:var(--text-sm-medium-font-style)]"
          } ${
            ["lg", "xl"].includes(size)
              ? "font-[number:var(--text-md-medium-font-weight)]"
              : size === "two-xl"
              ? "font-[number:var(--text-lg-medium-font-weight)]"
              : "font-[number:var(--text-sm-medium-font-weight)]"
          } ${
            ["lg", "xl"].includes(size)
              ? "leading-[var(--text-md-medium-line-height)]"
              : size === "two-xl"
              ? "leading-[var(--text-lg-medium-line-height)]"
              : "leading-[var(--text-sm-medium-line-height)]"
          } ${
            ["dot", "leading"].includes(icon)
              ? textClassName
              : icon === "false"
              ? divClassName
              : icon === "trailing"
              ? textClassNameOverride
              : undefined
          }`}
        >
          {text}
        </div>
      )}

      {icon === "trailing" && <>{icon1}</>}
    </div>
  );
};

ButtonBase.propTypes = {
  size: PropTypes.oneOf(["xl", "lg", "two-xl", "sm", "md"]),
  icon: PropTypes.oneOf(["only", "leading", "false", "dot", "trailing"]),
  text: PropTypes.string,
  circle245Color: PropTypes.string,
};
