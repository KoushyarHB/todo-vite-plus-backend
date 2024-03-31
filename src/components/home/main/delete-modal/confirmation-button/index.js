import { El } from "../../../../shared/El";

export const Confirmation = () => {
  return El({
    element: "button",
    id: "confirmation",
    className: "bg-gray-400 px-4 py-2 rounded-md",
    innerText: "Yes!",
  });
};
