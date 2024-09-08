import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { incremented } from "@/store";

import { LoginForm } from "./partial/LoginForm";

export const Login = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);
  console.log(count);
  return (
    <Layout className="flex flex-grow">
      <button onClick={() => dispatch(incremented())}>+</button>
      <LoginForm />
    </Layout>
  );
};

// export default Login;
