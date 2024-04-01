import { El } from "../../components/shared/El";

export const Filter = () => {
  return El({
    element: "div",
    id: "filter",
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
