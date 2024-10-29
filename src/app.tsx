import { App as AntdApp } from "antd";

import { Router } from "@/router";

import { AntdConfigProvider, MotionLazy } from "./components";

function App() {
  return (
    <AntdConfigProvider>
      <AntdApp className="h-full">
        <MotionLazy>
          <Router />
        </MotionLazy>
      </AntdApp>
    </AntdConfigProvider>
  );
}

export default App;
