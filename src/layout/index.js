import { El } from "../components/shared/El";
import { Footer } from "./footer";
import { Header } from "./header";

export const PageLayout = (main) => {
  return El({
    element: "div",
    children: [Header(), main(), Footer()],
  });
};
