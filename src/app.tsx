import { App as AntdApp } from "antd";

import { Router } from "@/router";

import { MotionLazy } from "./components";

function App() {
  return (
    <AntdApp className="h-full">
      <MotionLazy>
        {/* <Helmet>
        <title>Slash Admin</title>
        <link rel="icon" href={Logo} />
      </Helmet> */}
        <Router />
      </MotionLazy>
    </AntdApp>
  );
}

export default App;
