import { El } from "../../shared/El";

export const ModalButton = () => {
  return El({
    element: "div",
    className: "modal-btn text-center mt-4",
    children: [
      El({
        element: "button",
        className: "bg-blue-400 text-white w-1/2 p-2 px-4 rounded-md",
        type: "submit",
        innerText: "Add Task",
      }),
    ],
  });
};
