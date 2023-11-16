type ButtonProps = {
  variant?: "filled" | "outlined";
  btnText: string;
} & React.ComponentPropsWithoutRef<"button">;

const Button = ({
  variant = "filled",
  btnText = "",
  onClick = () => {},
  className = "",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "filled"
          ? "bg-yellow hover:bg-transparent text-white dark:text-black hover:text-yellow dark:hover:text-yellow"
          : "bg-transparent hover:bg-yellow text-yellow hover:text-black"
      } border-2 border-yellow py-3 px-8 rounded-sm text-body selection:bg-transparent ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
