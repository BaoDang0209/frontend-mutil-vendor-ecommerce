import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["xl", "lg", "two-xl", "sm", "md"],
      control: { type: "select" },
    },
    hierarchy: {
      options: [
        "tertiary-color",
        "link-color",
        "tertiary-gray",
        "secondary-color",
        "link-gray",
        "primary",
        "secondary-gray",
      ],
      control: { type: "select" },
    },
    icon: {
      options: ["only", "leading", "false", "dot", "trailing"],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "focused", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "xl",
    hierarchy: "tertiary-color",
    icon: "only",
    destructive: true,
    state: "disabled",
    className: {},
    buttonBaseSizeMdIconLeadingClassName: {},
    buttonBaseTextClassName: {},
    buttonBaseText: "Button CTA",
    buttonBaseTextClassNameOverride: {},
  },
};
