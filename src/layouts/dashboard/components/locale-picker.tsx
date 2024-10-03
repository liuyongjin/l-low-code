import type { MenuProps } from "antd";
import { Dropdown } from "antd";

import { IconButton, Iconify, SvgIcon } from "@/components";
import { LANGUAGE_MAP, useLocale } from "@/hooks";
import { LocalEnum } from "@/types/enum";

type Locale = keyof typeof LocalEnum;

/**
 * Locale Picker
 */
export function LocalePicker() {
  const { setLocale, locale } = useLocale();

  const localeList: MenuProps["items"] = Object.values(LANGUAGE_MAP).map(
    (item) => {
      return {
        key: item.locale,
        label: item.label,
        // icon: <SvgIcon icon={item.icon} size="20" className="rounded-md" /> ,
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
