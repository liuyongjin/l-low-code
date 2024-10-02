import { useDispatch } from "react-redux";

import { setSetting } from "@/store";

export const Workbench = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" />
      <button onClick={() => dispatch(setSetting({ multiTab: false }))}>
        setSetting
      </button>
      Workbench
    </div>
  );
};
