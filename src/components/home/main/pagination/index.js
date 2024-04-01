import { El } from "../../../shared/El";
import { Select } from "./select";
import { PaginationText } from "./paginationText";
import { PaginationButtons } from "./paginationButtons";

export const Pagination = () => {
  return El({
    element: "div",
    id: "pagination",
    className: "flex justify-end pt-5 pr-3 mb-96",
    children: [
      El({
        element: "div",
        className: "flex gap-12",
        children: [Select(), PaginationText(), PaginationButtons()],
      }),
    ],
  });
};
