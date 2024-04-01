import { El } from "../../../shared/El";

export const PaginationButtons = () => {
  return El({
    element: "div",
    className: "flex gap-3",
    children: [
      El({
        element: "button",
        id: "pagination-previous",
        children: [
          El({
            element: "img",
            src: "./src/assets/icons/left.svg",
          }),
        ],
      }),
      El({
        element: "button",
        id: "pagination-next",
        children: [
          El({
            element: "img",
            src: "./src/assets/icons/right.svg",
          }),
        ],
      }),
    ],
  });
};
