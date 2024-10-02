import React from "react";
import clsx from "clsx";

const Button = ({ icon, children, href, containerClassName }) => {
  return href ? (
    <a
      href={href}
      className={clsx(
        "relative, p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
    >
      Text
    </a>
  ) : (
    <button
      className={clsx(
        "relative, p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      Text
    </button>
  );
};

export default Button;
