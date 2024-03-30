import { El } from "../shared/El";
import { Deadline } from "./deadline";
import { ModalButton } from "./modalButton";
import { Priority } from "./priority";
import { Status } from "./status";
import { TaskName } from "./taskName";

export const ModalForm = () => {
  return El({
    element: "div",
    className: "mt-4",
    children: [
      El({
        element: "form",
        id: "modal-form",
        children: [TaskName(), Priority(), Status(), Deadline(), ModalButton()],
      }),
    ],
  });
};
