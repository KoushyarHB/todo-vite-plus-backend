import { El } from "../../../../shared/El";

export const Priority = () => {
  return El({
    element: "div",
    className: "flex justify-between items-center py-2",
    children: [
      El({
        element: "p",
        innerText: "Priority:",
      }),
      El({
        element: "div",
        className: "filter-priority flex gap-1",
        children: [
          El({
            element: "label",
            restAttrs: {
              for: "low",
            },
            className: "p-2 border rounded-lg",
            innerText: "low",
          }),
          El({
            element: "input",
            type: "radio",
            name: "priority",
            value: "low",
            id: "low",
            className: "hidden",
          }),
          El({
            element: "label",
            restAttrs: {
              for: "medium",
            },
            className: "p-2 border rounded-lg",
            innerText: "medium",
          }),
          El({
            element: "input",
            type: "radio",
            name: "priority",
            value: "medium",
            id: "medium",
            className: "hidden",
          }),
          El({
            element: "label",
            restAttrs: {
              for: "high",
            },
            className: "p-2 border rounded-lg",
            innerText: "high",
          }),
          El({
            element: "input",
            type: "radio",
            name: "priority",
            value: "high",
            id: "high",
            className: "hidden",
          }),
        ],
      }),
    ],
  });
};
