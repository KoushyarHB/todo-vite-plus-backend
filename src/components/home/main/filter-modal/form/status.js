import { El } from "../../../../shared/El";

export const Status = () => {
  return El({
    element: "div",
    className: "flex justify-between py-2",
    children: [
      El({
        element: "label",
        innerText: "Status:",
      }),
      El({
        element: "select",
        name: "status",
        children: [
          El({
            element: "option",
            value: "todo",
            innerText: "Todo",
          }),
          El({
            element: "option",
            value: "doing",
            innerText: "Doing",
          }),
          El({
            element: "option",
            value: "done",
            innerText: "Done",
          }),
        ],
      }),
    ],
  });
};
