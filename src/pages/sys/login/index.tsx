import { Layout } from "antd";
import { createStyles } from "antd-style";
import classNames from "classnames";
import { m } from "framer-motion";

import LoginBg from "@/assets/images/login-bg.png";
import { LocalePicker } from "@/components";
import { VARIANTS } from "@/constants";

import { LoginForm } from "./components/login-form";

export const Login = () => {
  const { styles } = useStyles();

  return (
    <Layout className="relative flex items-center justify-center h-full">
      <div className={classNames(styles.login, "flex")}>
        <div className="flex items-center justify-center flex-col">
          <div className="text-5xl font-bold">L Admin</div>
          <img className="max-w-[480px]" src={LoginBg} alt="LoginBg" />
        </div>
        <div className="flex items-center justify-center w-96 p-4 m-4 rounded-md">
          <m.div variants={VARIANTS.bounceInDown}>
            <LoginForm />
          </m.div>
        </div>
      </div>
      <div className="absolute right-2 top-2">
        <LocalePicker />
      </div>
    </Layout>
  );
};

const useStyles = createStyles(({ token }) => {
  const { colorBgContainer } = token;
  return {
    login: {
      borderRadius: "0.5rem",
      padding: "1rem",
      background: colorBgContainer,
    },
  };
});
