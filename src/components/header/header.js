import { El } from "../shared/El";
import { Functionalities } from "./functionalities";
import { Title } from "./title";

export const Header = () => {
  return El({
    element: "header",
    children: [
      El({
        element: "Nav",
        className: "bg-primary text-white p-2",
        children: [
          El({
            element: "div",
            className: "flex justify-between items-center",
            children: [Title(), Functionalities()],
          }),
        ],
      }),
    ],
  });
};

//NavBarFunctionalities()
