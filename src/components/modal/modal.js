import { El } from "../shared/El";
import { CloseButton } from "./closeButton";
import { ModalForm } from "./modalForm";

export const Modal = () => {
  return El({
    element: "div",
    className: "overlay hidden",
    children: [
      El({
        element: "div",
        className: "modal",
        children: [
          El({
            element: "div",
            className: "bg-white p-8 rounded-lg shadow-lg w-2/5",
            children: [CloseButton(), ModalForm()],
          }),
        ],
      }),
    ],
  });
};
