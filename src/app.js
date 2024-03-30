import { El } from "./components/shared/El";
import { Header } from "./components/header/header";

export const App = () => {
  return El({
    element: "div",
    className: "min-h-screen",
    children: [Header()],
  });
};

//, Main(), Footer()
