import { El } from "../shared/El";

export const Footer = () => {
  return El({
    element: "footer",
    className:
      "fixed bottom-0 w-full bg-primary text-white text-center text-sm p-1",
    children: [
      El({
        element: "p",
        innerText: "Author: Koushyar",
      }),
    ],
  });
};
