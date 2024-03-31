import { El } from "../../../../shared/El";

export const Rejection = () => {
  return El({
    element: "button",
    id: "rejection",
    className: "bg-gray-400 px-4 py-2 rounded-md",
    innerText: "Cancel",
  });
};
