import type { MenuProps } from "antd";
import { Dropdown } from "antd";

import { IconButton, Iconify } from "@/components";
import { LANGUAGE_MAP, useLocale } from "@/hooks";
import { Locale } from "@/types";

export function LocalePicker() {
  const { setLocale } = useLocale();

  const localeList: MenuProps["items"] = Object.values(LANGUAGE_MAP).map(
    (item) => {
      return {
        key: item.locale,
        label: item.label,
        icon: <Iconify icon={item.icon} size={24} />,
      };
    },
  );

  return (
    <Dropdown
      placement="bottomRight"
      trigger={["click"]}
      menu={{ items: localeList, onClick: (e) => setLocale(e.key as Locale) }}
    >
      <div>
        <IconButton className="h-10 w-10">
          <Iconify icon="material-symbols:language" size={24} />
        </IconButton>
      </div>
    </Dropdown>
  );
}
