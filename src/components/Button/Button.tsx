import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "w-full p-2 bg-white text-black rounded-md",
        props.className,
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
