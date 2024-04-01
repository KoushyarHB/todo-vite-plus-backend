import { El } from "../../../shared/El";

export const Select = () => {
  return El({
    element: "div",
    className: "flex gap-3",
    children: [
      El({
        element: "p",
        innerText: "Rows per page:",
      }),
      El({
        element: "select",
        className: "px-3 border rounded-md",
        id: "pagination-select",
        children: [
          El({
            element: "option",
            value: "100",
            innerText: "All",
          }),
          El({
            element: "option",
            value: "3",
            innerText: "3",
          }),
          El({
            element: "option",
            value: "5",
            innerText: "5",
          }),
          El({
            element: "option",
            value: "10",
            innerText: "10",
          }),
          El({
            element: "option",
            value: "15",
            innerText: "15",
          }),
        ],
      }),
    ],
  });
};
