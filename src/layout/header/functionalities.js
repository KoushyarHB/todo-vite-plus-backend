import { El } from "../../components/shared/El";
import { SearchForm } from "./searchForm";
import { Filter } from "./filter";
import { AddTask } from "./addTask";

export const Functionalities = () => {
  return El({
    element: "div",
    className: "flex items-center gap-4",
    children: [SearchForm(), Filter(), AddTask()],
  });
};
