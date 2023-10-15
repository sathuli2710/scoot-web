import { ButtonProps } from "../types/Button";

const Button = ({
  variant = "filled",
  btnText = "",
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "filled"
          ? "bg-yellow hover:bg-transparent text-white hover:text-yellow"
          : "bg-transparent hover:bg-yellow text-yellow hover:text-white"
      } border-2 border-yellow py-3 px-8 rounded-sm text-body selection:bg-transparent`}
    >
      {btnText}
    </button>
  );
};

export default Button;
