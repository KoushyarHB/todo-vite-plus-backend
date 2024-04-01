import { El } from "../../../../shared/El";

export const Title = () => {
  return El({
    element: "div",
    children: [
      El({
        element: "p",
        className: "mb-3",
        innerText: "Filter Your Tasks Base on:",
      }),
    ],
  });
};
