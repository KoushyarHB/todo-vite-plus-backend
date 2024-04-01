import { El } from "../../../../shared/El";
import { Deadline } from "./deadline";
import { ModalButton } from "./modalButton";
import { Priority } from "./priority";
import { Status } from "./status";
import { TaskName } from "./taskName";
import { Title } from "./title";

export const ModalForm = () => {
  return El({
    element: "div",
    className: "mt-4",
    children: [
      El({
        element: "form",
        id: "filter-modal-form",
        children: [
          Title(),
          TaskName(),
          Priority(),
          Status(),
          Deadline(),
          ModalButton(),
        ],
      }),
    ],
  });
};
