import { El } from "../../../../shared/El";

export const Message = () => {
  return El({
    element: "div",
    className: "mb-6",
    children: [
      El({
        element: "p",
        innerText: "Are you sure you want to delete this task?",
      }),
    ],
  });
};
