import { PaginationNumber } from ".";

export default {
  title: "Components/PaginationNumber",
  component: PaginationNumber,
  argTypes: {
    state: {
      options: ["hover-active", "focused", "default"],
      control: { type: "select" },
    },
    shape: {
      options: ["circle", "square"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "hover-active",
    shape: "circle",
    className: {},
    numberClassName: {},
    text: "1",
  },
};
