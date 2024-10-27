import { NavLink } from "react-router-dom";

import { Iconify, LocalePicker } from "@/components";
import { useThemeToken } from "@/hooks";

export const HeaderSimple = () => {
  const { colorPrimary } = useThemeToken();

  return (
    <header className="flex h-16 w-full items-center justify-between px-6">
      <NavLink to="/">
        <Iconify
          icon="material-symbols:wifi-home"
          color={colorPrimary}
          size={24}
        />
      </NavLink>
      <LocalePicker />
    </header>
  );
};
