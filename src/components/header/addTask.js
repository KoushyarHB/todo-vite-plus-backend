import { El } from "../shared/El";

export const AddTask = () => {
  return El({
    element: "div",
    id: "add-task",
    className: "cursor-pointer pr-2",
    children: [
      El({
        element: "img",
        src: "./src/assets/icons/add-box.svg",
        alt: "add-box",
      }),
    ],
  });
};
