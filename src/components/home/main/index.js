import { El } from "../../shared/El";
import { DeleteModal } from "./delete-modal";
import { FilterModal } from "./filter-modal";
import { Modal } from "./modal";
import { Pagination } from "./pagination";
import { Table } from "./table";

export const Main = () => {
  return El({
    element: "main",
    children: [Table(), Pagination(), Modal(), FilterModal(), DeleteModal()],
  });
};
