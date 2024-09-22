import { Layout } from "antd";

// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, incremented, RootState } from "@/store";
import { LoginForm } from "./components/login-form";

export const Login = () => {
  // const dispatch: AppDispatch = useDispatch();
  // const dispatch = useDispatch();
  // const setting = useSelector((state: RootState) => state.setting);
  // console.log(setting);
  return (
    <Layout className="flex flex-grow">
      {/* <button onClick={() => dispatch(incremented())}>+</button> */}
      <LoginForm />
    </Layout>
  );
};

// export default Login;
