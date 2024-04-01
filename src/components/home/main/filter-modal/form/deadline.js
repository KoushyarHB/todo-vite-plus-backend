import { El } from "../../../../shared/El";

export const Deadline = () => {
  return El({
    element: "div",
    className: "flex justify-between items-center py-2",
    children: [
      El({
        element: "label",
        innerText: "Deadline:",
      }),
      El({
        element: "input",
        className: "border shadow-sm rounded-md p-2",
        restAttrs: {
          name: "deadline",
          placeholder: "Due time",
        },
        dataset: {
          jdp: "",
        },
      }),
    ],
  });
};
