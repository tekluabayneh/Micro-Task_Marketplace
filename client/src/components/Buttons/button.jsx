import React from "react";
import { Slot } from "@radix-ui/react-slot";

function Button(
  {
    className,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
  },
  ref
) {
  let variantClass = "";
  switch (variant) {
    case "destructive":
      variantClass =
        "bg-destructive text-destructive-foreground hover:bg-destructive/90";
      break;
    case "outline":
      variantClass =
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
      break;
    case "secondary":
      variantClass =
        "bg-secondary text-secondary-foreground hover:bg-secondary/80";
      break;
    case "ghost":
      variantClass = "hover:bg-accent hover:text-accent-foreground";
      break;
    case "link":
      variantClass = "text-primary underline-offset-4 hover:underline";
      break;
    case "default":
    default:
      variantClass = "bg-primary text-primary-foreground hover:bg-primary/90";
      break;
  }

  let sizeClass = "";
  switch (size) {
    case "sm":
      sizeClass = "h-9 rounded-md px-3";
      break;
    case "lg":
      sizeClass = "h-11 rounded-md px-8";
      break;
    case "icon":
      sizeClass = "h-10 w-10";
      break;
    case "default":
    default:
      sizeClass = "h-10 px-4 py-2";
      break;
  }

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ${variantClass} ${sizeClass} ${className}`}
      ref={ref}
      {...props}
    />
  );
}

Button.displayName = "Button";

export { Button };
