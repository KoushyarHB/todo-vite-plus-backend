import { El } from "../../../../shared/El";
import { localization } from "@/constant/localization";

export const Message = () => {
  return El({
    element: "div",
    className: "mb-6",
    children: [
      El({
        element: "p",
        innerText: localization.deleteModalMessage,
      }),
    ],
  });
};
