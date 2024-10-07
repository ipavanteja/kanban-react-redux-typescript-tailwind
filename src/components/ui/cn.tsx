import clsx from "clsx";

export function cn(...classes: (string | undefined | boolean)[]) {
  return clsx(...classes);
}
