import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { t } from "i18next";
import { useDispatch } from "react-redux";

import { useRouter } from "@/hooks";
import { setUserInfo } from "@/store";

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

const initialValues = { username: "admin", password: "123456", remember: true };

export const LoginForm = () => {
  const { replace, push } = useRouter();
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(false);
  const handleFinish = (values: typeof initialValues) => {
    console.log("Received values of form: ", values);
    dispatch(
      setUserInfo({
        permissions: [
          {
            // id: "9100714781927703",
            label: "sys.menu.dashboard",
            icon: "ic-analysis",
            path: "dashboard",
            id: "/dashboard",
            children: [
              {
                // id: "8426999229400979",
                parentId: "/dashboard",
                label: "sys.menu.workbench",
                path: "workbench",
                id: "/dashboard/workbench",
                componentName: "Workbench",
                component: "/dashboard/workbench/index.tsx",
              },
            ],
          },
          {
            // id: "0901673425580518",
            label: "sys.menu.management",
            icon: "ic-management",
            path: "management",
            id: "/management",
            children: [
              {
                // id: "4359580910369984",
                parentId: "/management",
                label: "sys.menu.system.permission",
                path: "permission",
                id: "/management/permission",
                componentName: "Permission",
                component: "/management/permission/index.tsx",
              },
            ],
          },
        ],
      }),
    );
    replace(HOMEPAGE);
  };

  return (
    <Form name="login" initialValues={initialValues} onFinish={handleFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="admin" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          autoComplete="off"
          type="password"
          placeholder="123456"
        />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>{t("sys.login.rememberMe")}</Checkbox>
          </Form.Item>
          <a href="">{t("sys.login.forgetPassword")}</a>
        </Flex>
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          {t("sys.login.loginButton")}
        </Button>
      </Form.Item>
    </Form>
  );
};
