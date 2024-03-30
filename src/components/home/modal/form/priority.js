import { El } from "../../shared/El";

export const Priority = () => {
  return El({
    element: "div",
    className: "flex justify-between py-2",
    children: [
      El({
        element: "label",
        innerText: "Priority:",
      }),
      El({
        element: "select",
        name: "priority",
        children: [
          El({
            element: "option",
            value: "low",
            innerText: "low",
          }),
          El({
            element: "option",
            value: "medium",
            innerText: "medium",
          }),
          El({
            element: "option",
            value: "high",
            innerText: "high",
          }),
        ],
      }),
    ],
  });
};
