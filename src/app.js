import { El } from "./components/shared/El";
import { Header } from "./components/header/header";
import { MainSection } from "./components/main-section/mainSection";
import { Footer } from "./components/footer/footer";
import { Modal } from "./components/modal/modal";

export const App = () => {
  return El({
    element: "div",
    className: "min-h-screen",
    children: [Header(), MainSection(), Modal(), Footer()],
  });
};
