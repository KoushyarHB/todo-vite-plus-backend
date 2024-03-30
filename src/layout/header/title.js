import { El } from "../../components/shared/El";

export const Title = () => {
  return El({
    element: "div",
    className: "flex items-center gap-2 flex-grow",
    children: [
      El({
        element: "img",
        className: "cursor-pointer",
        src: "./src/assets/icons/burger-menu.svg",
        alt: "burger-menu",
      }),
      El({
        element: "h1",
        className: "text-lg",
        innerText: "My To-Do Tasks",
      }),
    ],
  });
};
