import { El } from "../../shared/El";

export const Deadline = () => {
  return El({
    element: "div",
    className: "flex justify-between py-2",
    children: [
      El({
        element: "label",
        innerText: "Deadline:",
      }),
      El({
        element: "input",
        className: "border",
        name: "date",
      }),
    ],
  });
};
