import { El } from "../shared/El";

export const Table = () => {
  return El({
    element: "table",
    id: "tasks-table",
    className: "w-full",
    children: [
      El({
        element: "thead",
        children: [
          El({
            element: "th",
            className: "header-cell !text-left max-w-350",
            innerText: "Task Name",
          }),
          El({
            element: "th",
            className: "header-cell",
            innerText: "Priority",
          }),
          El({
            element: "th",
            className: "header-cell",
            innerText: "Status",
          }),
          El({
            element: "th",
            className: "header-cell",
            innerText: "Deadline",
          }),
          El({
            element: "th",
            className: "header-cell",
            innerText: "Actions",
          }),
        ],
      }),
      El({
        element: "tbody",
      }),
    ],
  });
};
