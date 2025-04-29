"use client";
import { Popover as PopoverRadix } from "@radix-ui/themes";

type PopoverProps = {
  trigger?: React.ReactNode;
  children: React.ReactNode;
} & PopoverRadix.RootProps;

export const Popover = ({ trigger, children, ...props }: PopoverProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };
  return (
    <PopoverRadix.Root {...props}>
      {trigger && (
        <PopoverRadix.Trigger onClick={handleClick}>
          {trigger}
        </PopoverRadix.Trigger>
      )}
      <PopoverRadix.Content
        style={{ minHeight: "auto" }}
        className="!min-h-[auto] "
      >
        {children}
      </PopoverRadix.Content>
    </PopoverRadix.Root>
  );
};
