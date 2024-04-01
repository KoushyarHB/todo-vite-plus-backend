import { El } from "../../../shared/El";

export const PaginationText = () => {
  return El({
    element: "div",
    children: [
      El({
        element: "span",
        id: "pagination-start",
        innerText: "1",
      }),
      El({
        element: "span",
        innerText: "-",
      }),
      El({
        element: "span",
        id: "pagination-end",
        innerText: "3",
      }),
      El({
        element: "span",
        innerText: " of ",
      }),
      El({
        element: "span",
        id: "pagination-total",
        innerText: "3",
      }),
    ],
  });
};
