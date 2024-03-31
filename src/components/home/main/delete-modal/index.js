import { El } from "../../../shared/El";
import { CloseButton } from "./close-button";
import { Confirmation } from "./confirmation-button";
import { Message } from "./message";
import { Rejection } from "./rejection-button";

export const DeleteModal = () => {
  return El({
    element: "div",
    className: "delete-overlay",
    children: [
      El({
        element: "div",
        className: "delete-modal",
        children: [
          El({
            element: "div",
            className: "bg-white p-8 rounded-lg shadow-lg w-1/5",
            children: [
              CloseButton(),
              Message(),
              El({
                element: "div",
                className: "flex justify-around",
                children: [Confirmation(), Rejection()],
              }),
            ],
          }),
        ],
      }),
      El({}),
      El({}),
    ],
  });
};
