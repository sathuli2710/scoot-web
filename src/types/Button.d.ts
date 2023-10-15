import React from "react";

export type ButtonProps = {
  variant: "filled" | "outlined";
  btnText: string;
} & React.ComponentPropsWithoutRef<"button">;
