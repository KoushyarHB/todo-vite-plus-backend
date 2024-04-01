import { El } from "../../../shared/El";
import { CloseButton } from "./close-button";
import { ModalForm } from "./form";

export const FilterModal = () => {
  return El({
    element: "div",
    className: "filter-overlay hidden",
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
