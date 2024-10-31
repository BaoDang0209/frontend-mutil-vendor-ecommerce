/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Circle245 } from "../../icons/Circle245";
import { Circle589 } from "../../icons/Circle589";
import { Circle682 } from "../../icons/Circle682";
import { ButtonBase } from "../ButtonBase";

export const Button = ({
  size,
  hierarchy,
  icon,
  destructive,
  state,
  className,
  buttonBaseSizeMdIconLeadingClassName,
  buttonBaseTextClassName,
  buttonBaseText = "Button CTA",
  buttonBaseIcon = <Circle245 className="!relative !w-5 !h-5" color="#344054" />,
  override = <Circle245 className="!relative !w-5 !h-5" color="#344054" />,
  buttonBaseTextClassNameOverride,
}) => {
  return (
    <div
      className={`inline-flex items-start relative ${
        hierarchy === "secondary-color" && icon === "false" && destructive && state === "focused" && size === "sm"
          ? "shadow-shadow-xs-focused-4px-error-100"
          : hierarchy === "secondary-gray" && !destructive && state === "focused" && size === "sm" && icon === "only"
          ? "shadow-shadow-xs-focused-4px-gray-100"
          : ""
      } ${
        (destructive && hierarchy === "link-color") ||
        (destructive && hierarchy === "link-gray") ||
        hierarchy === "primary" ||
        hierarchy === "secondary-color" ||
        hierarchy === "secondary-gray" ||
        hierarchy === "tertiary-color" ||
        hierarchy === "tertiary-gray"
          ? "rounded-lg"
          : ""
      } ${className}`}
    >
      <ButtonBase
        circle245Color={
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "only" &&
            size === "md" &&
            state === "default") ||
          (!destructive && hierarchy === "tertiary-color" && icon === "only" && size === "md" && state === "default")
            ? "#6941C6"
            : (destructive &&
                hierarchy === "secondary-color" &&
                icon === "only" &&
                size === "md" &&
                state === "default") ||
              (destructive && hierarchy === "tertiary-color" && icon === "only" && size === "md" && state === "default")
            ? "#B42318"
            : undefined
        }
        className={buttonBaseSizeMdIconLeadingClassName}
        divClassName={
          (!destructive && hierarchy === "link-color" && icon === "false" && state === "default") ||
          (!destructive && hierarchy === "link-color" && icon === "false" && state === "focused") ||
          (!destructive && hierarchy === "secondary-color" && icon === "false" && state === "default") ||
          (!destructive && hierarchy === "secondary-color" && icon === "false" && state === "focused") ||
          (!destructive && hierarchy === "secondary-color" && icon === "false" && state === "hover") ||
          (!destructive && hierarchy === "tertiary-color" && icon === "false" && state === "default") ||
          (!destructive && hierarchy === "tertiary-color" && icon === "false" && state === "focused") ||
          (!destructive && hierarchy === "tertiary-color" && icon === "false" && state === "hover")
            ? "!text-primary-700"
            : (destructive && hierarchy === "link-color" && icon === "false" && state === "default") ||
              (destructive && hierarchy === "link-color" && icon === "false" && state === "focused") ||
              (destructive && hierarchy === "link-gray" && icon === "false" && state === "default") ||
              (destructive && hierarchy === "link-gray" && icon === "false" && state === "focused") ||
              (destructive && hierarchy === "secondary-color" && icon === "false" && state === "default") ||
              (destructive && hierarchy === "secondary-color" && icon === "false" && state === "focused") ||
              (destructive && hierarchy === "secondary-color" && icon === "false" && state === "hover") ||
              (destructive && hierarchy === "secondary-gray" && icon === "false" && state === "default") ||
              (destructive && hierarchy === "secondary-gray" && icon === "false" && state === "focused") ||
              (destructive && hierarchy === "tertiary-color" && icon === "false" && state === "default") ||
              (destructive && hierarchy === "tertiary-color" && icon === "false" && state === "focused") ||
              (destructive && hierarchy === "tertiary-color" && icon === "false" && state === "hover") ||
              (destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "default") ||
              (destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "focused")
            ? "!text-error-700"
            : (!destructive && hierarchy === "link-gray" && icon === "false" && state === "default") ||
              (!destructive && hierarchy === "link-gray" && icon === "false" && state === "focused") ||
              (!destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "default") ||
              (!destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "focused")
            ? "!text-gray-500"
            : (!destructive && hierarchy === "secondary-gray" && icon === "false" && state === "default") ||
              (!destructive && hierarchy === "secondary-gray" && icon === "false" && state === "focused")
            ? "!text-gray-700"
            : state === "disabled" && hierarchy === "secondary-color" && icon === "false" && !destructive
            ? "!text-primary-300"
            : (destructive && hierarchy === "link-color" && icon === "false" && state === "disabled") ||
              (destructive && hierarchy === "link-gray" && icon === "false" && state === "disabled") ||
              (destructive && hierarchy === "secondary-color" && icon === "false" && state === "disabled") ||
              (destructive && hierarchy === "secondary-gray" && icon === "false" && state === "disabled") ||
              (destructive && hierarchy === "tertiary-color" && icon === "false" && state === "disabled") ||
              (destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "disabled")
            ? "!text-error-300"
            : (!destructive && hierarchy === "link-color" && icon === "false" && state === "disabled") ||
              (!destructive && hierarchy === "link-gray" && icon === "false" && state === "disabled") ||
              (!destructive && hierarchy === "secondary-gray" && icon === "false" && state === "disabled") ||
              (!destructive && hierarchy === "tertiary-color" && icon === "false" && state === "disabled") ||
              (!destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "disabled")
            ? "!text-gray-300"
            : state === "hover" && hierarchy === "link-color" && icon === "false" && !destructive
            ? "!text-primary-800"
            : (destructive && hierarchy === "link-color" && icon === "false" && state === "hover") ||
              (destructive && hierarchy === "link-gray" && icon === "false" && state === "hover") ||
              (destructive && hierarchy === "secondary-gray" && icon === "false" && state === "hover") ||
              (destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "hover")
            ? "!text-error-800"
            : (!destructive && hierarchy === "link-gray" && icon === "false" && state === "hover") ||
              (!destructive && hierarchy === "tertiary-gray" && icon === "false" && state === "hover")
            ? "!text-gray-600"
            : state === "hover" && hierarchy === "secondary-gray" && icon === "false" && !destructive
            ? "!text-gray-800"
            : undefined
        }
        dotClassName={
          (hierarchy === "link-color" && icon === "dot" && state === "default") ||
          (hierarchy === "link-color" && icon === "dot" && state === "focused") ||
          (hierarchy === "link-color" && icon === "dot" && state === "hover") ||
          (hierarchy === "link-gray" && icon === "dot" && state === "default") ||
          (hierarchy === "link-gray" && icon === "dot" && state === "focused") ||
          (hierarchy === "link-gray" && icon === "dot" && state === "hover") ||
          (hierarchy === "secondary-color" && icon === "dot" && state === "default") ||
          (hierarchy === "secondary-color" && icon === "dot" && state === "focused") ||
          (hierarchy === "secondary-color" && icon === "dot" && state === "hover") ||
          (hierarchy === "secondary-gray" && icon === "dot" && state === "default") ||
          (hierarchy === "secondary-gray" && icon === "dot" && state === "focused") ||
          (hierarchy === "secondary-gray" && icon === "dot" && state === "hover") ||
          (hierarchy === "tertiary-color" && icon === "dot" && state === "default") ||
          (hierarchy === "tertiary-color" && icon === "dot" && state === "focused") ||
          (hierarchy === "tertiary-color" && icon === "dot" && state === "hover") ||
          (hierarchy === "tertiary-gray" && icon === "dot" && state === "default") ||
          (hierarchy === "tertiary-gray" && icon === "dot" && state === "focused") ||
          (hierarchy === "tertiary-gray" && icon === "dot" && state === "hover")
            ? "!bg-success-500"
            : icon === "dot" && state === "disabled" && hierarchy === "secondary-color" && !destructive
            ? "!bg-primary-300"
            : (destructive && hierarchy === "link-color" && icon === "dot" && state === "disabled") ||
              (destructive && hierarchy === "link-gray" && icon === "dot" && state === "disabled") ||
              (destructive && hierarchy === "secondary-color" && icon === "dot" && state === "disabled") ||
              (destructive && hierarchy === "secondary-gray" && icon === "dot" && state === "disabled") ||
              (destructive && hierarchy === "tertiary-color" && icon === "dot" && state === "disabled") ||
              (destructive && hierarchy === "tertiary-gray" && icon === "dot" && state === "disabled")
            ? "!bg-error-300"
            : (!destructive && hierarchy === "link-color" && icon === "dot" && state === "disabled") ||
              (!destructive && hierarchy === "link-gray" && icon === "dot" && state === "disabled") ||
              (!destructive && hierarchy === "secondary-gray" && icon === "dot" && state === "disabled") ||
              (!destructive && hierarchy === "tertiary-color" && icon === "dot" && state === "disabled") ||
              (!destructive && hierarchy === "tertiary-gray" && icon === "dot" && state === "disabled")
            ? "!bg-gray-300"
            : undefined
        }
        icon={
          icon === "dot"
            ? "dot"
            : icon === "leading"
            ? "leading"
            : icon === "trailing"
            ? "trailing"
            : icon === "only"
            ? "only"
            : "false"
        }
        icon1={override}
        icon2={
          (!destructive && hierarchy === "tertiary-gray" && icon === "only" && size === "lg" && state === "default") ||
          (!destructive && hierarchy === "tertiary-gray" && icon === "only" && size === "md" && state === "default") ||
          (!destructive && hierarchy === "tertiary-gray" && icon === "only" && size === "sm" && state === "default") ||
          (!destructive && hierarchy === "tertiary-gray" && icon === "only" && size === "xl" && state === "default") ? (
            <Circle682 className="!relative !w-5 !h-5" />
          ) : (!destructive &&
              hierarchy === "tertiary-gray" &&
              icon === "only" &&
              size === "xl" &&
              state === "disabled") ||
            (!destructive && hierarchy === "tertiary-gray" && icon === "only" && size === "xl" && state === "hover") ||
            (!destructive && icon === "only" && size === "xl" && state === "focused") ||
            (destructive && hierarchy === "primary" && icon === "only" && size === "xl" && state === "focused") ||
            (destructive &&
              hierarchy === "secondary-color" &&
              icon === "only" &&
              size === "xl" &&
              state === "focused") ||
            (destructive &&
              hierarchy === "secondary-gray" &&
              icon === "only" &&
              size === "xl" &&
              state === "focused") ||
            (destructive &&
              hierarchy === "tertiary-color" &&
              icon === "only" &&
              size === "xl" &&
              state === "focused") ||
            (destructive && hierarchy === "tertiary-gray" && icon === "only" && size === "lg" && state === "default") ||
            (destructive && hierarchy === "tertiary-gray" && icon === "only" && size === "md" && state === "default") ||
            (destructive && hierarchy === "tertiary-gray" && icon === "only" && size === "sm" && state === "default") ||
            (destructive && hierarchy === "tertiary-gray" && icon === "only" && size === "xl") ||
            (hierarchy === "primary" && icon === "only" && size === "lg") ||
            (hierarchy === "primary" && icon === "only" && size === "sm" && state === "default") ||
            (hierarchy === "primary" && icon === "only" && size === "xl" && state === "default") ||
            (hierarchy === "primary" && icon === "only" && size === "xl" && state === "disabled") ||
            (hierarchy === "primary" && icon === "only" && size === "xl" && state === "hover") ||
            (hierarchy === "secondary-color" && icon === "only" && size === "lg") ||
            (hierarchy === "secondary-color" && icon === "only" && size === "sm" && state === "default") ||
            (hierarchy === "secondary-color" && icon === "only" && size === "xl" && state === "default") ||
            (hierarchy === "secondary-color" && icon === "only" && size === "xl" && state === "disabled") ||
            (hierarchy === "secondary-color" && icon === "only" && size === "xl" && state === "hover") ||
            (hierarchy === "secondary-gray" && icon === "only" && size === "lg") ||
            (hierarchy === "secondary-gray" && icon === "only" && size === "md" && state === "default") ||
            (hierarchy === "secondary-gray" && icon === "only" && size === "sm" && state === "default") ||
            (hierarchy === "secondary-gray" && icon === "only" && size === "xl" && state === "default") ||
            (hierarchy === "secondary-gray" && icon === "only" && size === "xl" && state === "disabled") ||
            (hierarchy === "secondary-gray" && icon === "only" && size === "xl" && state === "hover") ||
            (hierarchy === "tertiary-color" && icon === "only" && size === "lg") ||
            (hierarchy === "tertiary-color" && icon === "only" && size === "sm" && state === "default") ||
            (hierarchy === "tertiary-color" && icon === "only" && size === "xl" && state === "default") ||
            (hierarchy === "tertiary-color" && icon === "only" && size === "xl" && state === "disabled") ||
            (hierarchy === "tertiary-color" && icon === "only" && size === "xl" && state === "hover") ||
            (hierarchy === "tertiary-gray" && icon === "only" && size === "lg" && state === "disabled") ||
            (hierarchy === "tertiary-gray" && icon === "only" && size === "lg" && state === "focused") ||
            (hierarchy === "tertiary-gray" && icon === "only" && size === "lg" && state === "hover") ||
            (icon === "only" && size === "md" && state === "disabled") ||
            (icon === "only" && size === "md" && state === "focused") ||
            (icon === "only" && size === "md" && state === "hover") ||
            (icon === "only" && size === "sm" && state === "disabled") ||
            (icon === "only" && size === "sm" && state === "focused") ||
            (icon === "only" && size === "sm" && state === "hover") ? (
            <Circle245
              className="!relative !w-5 !h-5"
              color={
                (destructive && hierarchy === "secondary-color" && state === "default") ||
                (destructive && hierarchy === "secondary-color" && state === "focused") ||
                (destructive && hierarchy === "secondary-color" && state === "hover") ||
                (destructive && hierarchy === "secondary-gray" && state === "default") ||
                (destructive && hierarchy === "secondary-gray" && state === "focused") ||
                (destructive && hierarchy === "tertiary-color" && state === "default") ||
                (destructive && hierarchy === "tertiary-color" && state === "focused") ||
                (destructive && hierarchy === "tertiary-color" && state === "hover") ||
                (destructive && hierarchy === "tertiary-gray" && state === "focused") ||
                (hierarchy === "tertiary-gray" && state === "default")
                  ? "#B42318"
                  : !destructive && hierarchy === "secondary-gray" && ["default", "focused"].includes(state)
                  ? "#344054"
                  : hierarchy === "primary"
                  ? "white"
                  : state === "disabled" && hierarchy === "secondary-color" && !destructive
                  ? "#D6BBFB"
                  : (destructive && hierarchy === "secondary-color" && state === "disabled") ||
                    (destructive && hierarchy === "secondary-gray" && state === "disabled") ||
                    (destructive && hierarchy === "tertiary-color" && state === "disabled") ||
                    (destructive && hierarchy === "tertiary-gray" && state === "disabled")
                  ? "#FDA29B"
                  : (!destructive && hierarchy === "secondary-gray" && state === "disabled") ||
                    (!destructive && hierarchy === "tertiary-color" && state === "disabled") ||
                    (!destructive && hierarchy === "tertiary-gray" && state === "disabled")
                  ? "#D0D5DD"
                  : (!destructive && hierarchy === "secondary-color" && state === "default") ||
                    (!destructive && hierarchy === "secondary-color" && state === "focused") ||
                    (!destructive && hierarchy === "secondary-color" && state === "hover") ||
                    (!destructive && hierarchy === "tertiary-color" && state === "default") ||
                    (!destructive && hierarchy === "tertiary-color" && state === "focused") ||
                    (!destructive && hierarchy === "tertiary-color" && state === "hover")
                  ? "#6941C6"
                  : hierarchy === "tertiary-gray" && !destructive && state === "focused"
                  ? "#667085"
                  : hierarchy === "tertiary-gray" && state === "hover" && !destructive
                  ? "#475467"
                  : destructive && state === "hover" && ["secondary-gray", "tertiary-gray"].includes(hierarchy)
                  ? "#912018"
                  : hierarchy === "secondary-gray" && state === "hover" && !destructive
                  ? "#1D2939"
                  : undefined
              }
            />
          ) : icon === "only" && size === "two-xl" ? (
            <Circle589
              className="!relative !w-6 !h-6"
              color={
                hierarchy === "primary"
                  ? "white"
                  : (!destructive && hierarchy === "secondary-color" && state === "default") ||
                    (!destructive && hierarchy === "secondary-color" && state === "focused") ||
                    (!destructive && hierarchy === "secondary-color" && state === "hover") ||
                    (!destructive && hierarchy === "tertiary-color" && state === "default") ||
                    (!destructive && hierarchy === "tertiary-color" && state === "focused") ||
                    (!destructive && hierarchy === "tertiary-color" && state === "hover")
                  ? "#6941C6"
                  : (destructive && hierarchy === "secondary-color" && state === "default") ||
                    (destructive && hierarchy === "secondary-color" && state === "focused") ||
                    (destructive && hierarchy === "secondary-color" && state === "hover") ||
                    (destructive && hierarchy === "secondary-gray" && state === "default") ||
                    (destructive && hierarchy === "secondary-gray" && state === "focused") ||
                    (destructive && hierarchy === "tertiary-color" && state === "default") ||
                    (destructive && hierarchy === "tertiary-color" && state === "focused") ||
                    (destructive && hierarchy === "tertiary-color" && state === "hover") ||
                    (destructive && hierarchy === "tertiary-gray" && state === "default") ||
                    (destructive && hierarchy === "tertiary-gray" && state === "focused")
                  ? "#B42318"
                  : !destructive && hierarchy === "tertiary-gray" && ["default", "focused"].includes(state)
                  ? "#667085"
                  : !destructive && hierarchy === "secondary-gray" && ["default", "focused"].includes(state)
                  ? "#344054"
                  : state === "disabled" && hierarchy === "secondary-color" && !destructive
                  ? "#D6BBFB"
                  : (destructive && hierarchy === "secondary-color" && state === "disabled") ||
                    (destructive && hierarchy === "secondary-gray" && state === "disabled") ||
                    (destructive && hierarchy === "tertiary-color" && state === "disabled") ||
                    (destructive && hierarchy === "tertiary-gray" && state === "disabled")
                  ? "#FDA29B"
                  : (!destructive && hierarchy === "secondary-gray" && state === "disabled") ||
                    (!destructive && hierarchy === "tertiary-color" && state === "disabled") ||
                    (!destructive && hierarchy === "tertiary-gray" && state === "disabled")
                  ? "#D0D5DD"
                  : hierarchy === "tertiary-gray" && state === "hover" && !destructive
                  ? "#475467"
                  : destructive && state === "hover" && ["secondary-gray", "tertiary-gray"].includes(hierarchy)
                  ? "#912018"
                  : hierarchy === "secondary-gray" && state === "hover" && !destructive
                  ? "#1D2939"
                  : undefined
              }
            />
          ) : undefined
        }
        override={buttonBaseIcon}
        size={size === "lg" ? "lg" : size === "xl" ? "xl" : size === "two-xl" ? "two-xl" : size === "sm" ? "sm" : "md"}
        text={buttonBaseText}
        textClassName={buttonBaseTextClassName}
        textClassNameOverride={buttonBaseTextClassNameOverride}
      />
    </div>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["xl", "lg", "two-xl", "sm", "md"]),
  hierarchy: PropTypes.oneOf([
    "tertiary-color",
    "link-color",
    "tertiary-gray",
    "secondary-color",
    "link-gray",
    "primary",
    "secondary-gray",
  ]),
  icon: PropTypes.oneOf(["only", "leading", "false", "dot", "trailing"]),
  destructive: PropTypes.bool,
  state: PropTypes.oneOf(["disabled", "focused", "hover", "default"]),
  buttonBaseText: PropTypes.string,
};
