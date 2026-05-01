import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline";
  size?: "default" | "lg";
  children: React.ReactNode;
};

export function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium transition",
    "disabled:pointer-events-none disabled:opacity-50",
    size === "lg" ? "h-12 px-6 text-base" : "h-10 px-4 text-sm",
    variant === "outline"
      ? "border border-white/20 bg-transparent"
      : "bg-red-600 text-white hover:bg-red-500",
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<any>,
      {
        className: cn(
          classes,
          (children as React.ReactElement<any>).props?.className
        ),
      }
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
