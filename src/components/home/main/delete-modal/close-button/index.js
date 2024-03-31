import { El } from "../../../../shared/El";

export const CloseButton = () => {
  return El({
    element: "div",
    className: "flex justify-end",
    children: [
      El({
        element: "button",
        id: "closeDeleteModal",
        children: [
          El({
            element: "img",
            src: "./src/assets/icons/close.svg",
            alt: "close delete modal",
          }),
        ],
      }),
    ],
  });
};
