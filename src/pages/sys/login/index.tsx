import { Layout } from "antd";

import { LoginForm } from "./components/login-form";

export const Login = () => {
  return (
    <Layout className="flex flex-row items-center h-full">
      <div className="flex-1"></div>
      <div className="w-96 p-4 m-4 rounded-md">
        <LoginForm />
      </div>
    </Layout>
  );
};
