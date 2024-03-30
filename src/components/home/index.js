import { PageLayout } from "../../layout";
import { El } from "../shared/El";
import { Main } from "../home/main";

export function Home() {
  return El({
    element: "div",
    className: "w-full",
    children: [PageLayout(Main)],
  });
}
