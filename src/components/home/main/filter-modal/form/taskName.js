import { El } from "../../../../shared/El";

export const TaskName = () => {
  return El({
    element: "div",
    children: [
      El({
        element: "p",
        className: "mb-3",
        innerText: "Filter Your Tasks Base on:",
      }),
      El({
        element: "div",
        className: "flex justify-between items-center",
        children: [
          El({
            element: "p",
            innerText: "Name:",
          }),
          El({
            element: "input",
            className: "shadow-sm rounded-md p-2 my-2 border",
            type: "text",
            name: "taskName",
            placeholder: "Describe your task",
            restAttrs: {
              required: "",
            },
          }),
        ],
      }),
    ],
  });
};
