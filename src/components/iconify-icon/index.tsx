import type { IconProps } from "@iconify/react";
import { Icon } from "@iconify/react";

interface Props extends IconProps {
  size?: IconProps["width"];
}
export function Iconify({
  icon,
  size = "1em",
  className = "",
  ...other
}: Props) {
  return (
    <Icon
      icon={icon}
      width={size}
      height={size}
      className={`m-auto ${className}`}
      {...other}
    />
  );
}
