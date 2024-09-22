import { useDispatch } from "react-redux";

import { setSettings } from "@/store";

export const Workbench = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" />
      <button onClick={() => dispatch(setSettings({ multiTab: false }))}>
        setSettings
      </button>
      Workbench
    </div>
  );
};
