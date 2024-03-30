import { El } from "../shared/El";

export const SearchForm = () => {
  return El({
    element: "form",
    children: [
      El({
        element: "div",
        className: "relative",
        children: [
          El({
            element: "div",
            className:
              "absolute inset-y-0 left-0 flex items-center pl-2 cursor-pointer",
            children: [
              El({
                element: "img",
                src: "./src/assets/icons/search.svg",
                alt: "magnifier-image",
              }),
            ],
          }),
          El({
            element: "input",
            className: "block w-full p-1 ps-10 text-sm rounded-sm bg-secondary",
            type: "search",
            placeholder: "Search",
          }),
        ],
      }),
    ],
  });
};
