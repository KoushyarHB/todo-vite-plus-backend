import { El } from "../shared/El";

export const Filter = () => {
  return El({
    element: "div",
    className: "cursor-pointer",
    children: [
      El({
        element: "img",
        src: "./src/assets/icons/filter.svg",
        alt: "filter",
      }),
    ],
  });
};
