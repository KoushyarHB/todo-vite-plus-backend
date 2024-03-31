import { El } from "../../../../shared/El";

export const CloseButton = () => {
  return El({
    element: "div",
    className: "flex justify-end",
    children: [
      El({
        element: "button",
        id: "closeModal",
        children: [
          El({
            element: "img",
            src: "./src/assets/icons/close.svg",
            alt: "close",
          }),
        ],
      }),
    ],
  });
};
