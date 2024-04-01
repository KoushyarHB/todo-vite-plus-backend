import { El } from "../../../../shared/El";

export const Status = () => {
  return El({
    element: "div",
    className: "flex justify-between items-center py-2",
    children: [
      El({
        element: "p",
        innerText: "Status:",
      }),
      El({
        element: "div",
        className: "filter-status flex gap-1",
        children: [
          El({
            element: "label",
            restAttrs: {
              for: "todo",
            },
            className: "p-2 border rounded-lg",
            innerText: "todo",
          }),
          El({
            element: "input",
            type: "radio",
            name: "status",
            value: "todo",
            id: "todo",
            className: "hidden",
          }),
          El({
            element: "label",
            restAttrs: {
              for: "doing",
            },
            className: "p-2 border rounded-lg",
            innerText: "doing",
          }),
          El({
            element: "input",
            type: "radio",
            name: "status",
            value: "doing",
            id: "doing",
            className: "hidden",
          }),
          El({
            element: "label",
            restAttrs: {
              for: "done",
            },
            className: "p-2 border rounded-lg",
            innerText: "done",
          }),
          El({
            element: "input",
            type: "radio",
            name: "status",
            value: "done",
            id: "done",
            className: "hidden",
          }),
        ],
      }),
    ],
  });
};
