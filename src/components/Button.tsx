import { CheckCircle } from "lucide-react";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "flex justify-center items-center bg-zinc-50 rounded font-medium text-zinc-900   hover:bg-zinc-200 text-sm data-[success=true]:bg-emerald-500 data-[success=true]:hover:bg-emerald-600",
  variants: {
    size: {
      default: "h-10 px-4",
      sm: "h-8 px-3",
      xm: "h-6 px-2 text-xs",
    },
    success: {
      true: "bg-emerald-500 :hover:bg-emerald-600",
    },
  },
  defaultVariants: {
    size: "default",
    success: false,
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button>;

export const Button = ({
  success = false,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      data-success={success}
      className={button({ size, success, className })}
      {...props}
    >
      {success ? <CheckCircle className="h-4 w-4" /> : "Sign In"}
    </button>
  );
};
