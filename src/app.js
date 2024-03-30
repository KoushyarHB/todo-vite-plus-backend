import { El } from "./components/shared/El";

export const App = () => {
  return El({
    element: "div",
    className: "bg-yellow-400",
    children: "base div elem",
  });
};
