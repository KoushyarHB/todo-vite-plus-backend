import { El } from "../shared/El";

export const TaskName = () => {
  return El({
    element: "div",
    children: [
      El({
        element: "label",
        innerText: "Task Name:",
      }),
      El({
        element: "input",
        className: "w-full shadow-sm rounded-md p-2 my-2 border",
        type: "text",
        name: "taskName",
        placeholder: "Describe your task",
      }),
    ],
  });
};
