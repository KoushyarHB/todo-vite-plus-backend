import { El } from "./components/shared/El";
import { Home } from "./components/home";

export const App = () => {
  return El({
    element: "div",
    className: "min-h-screen",
    children: [Home()],
  });
};
