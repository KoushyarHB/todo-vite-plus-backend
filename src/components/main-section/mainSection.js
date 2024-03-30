import { El } from "../shared/El";
import { Pagination } from "./pagination";
import { Table } from "./table";

export const MainSection = () => {
  return El({
    element: "main",
    children: [Table(), Pagination()],
  });
};
