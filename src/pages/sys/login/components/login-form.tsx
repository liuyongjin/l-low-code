import { Button, Checkbox, Flex, Form, Input } from "antd";
import { t } from "i18next";
import { useDispatch } from "react-redux";

import { useLogin } from "@/api/userService";
import { Iconify } from "@/components";
import { useRouter } from "@/hooks";
import { setUserInfo } from "@/store";

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

const initialValues = {
  username: "admin",
  password: "456456465",
  remember: true,
};

export const LoginForm = () => {
  const { replace } = useRouter();
  const dispatch = useDispatch();
  const { refetch } = useLogin();
  // console.log(data);

  // const [loading, setLoading] = useState(false);
  const handleFinish = async (values: typeof initialValues) => {
    console.log("Received values of form: ", values);
    // const user = await login({
    //   username: "admin",
    //   password: "123456789",
    // });
    // console.log(user);
    const userInfo = await refetch();
    const { permissions } = userInfo.data;
    // console.log(permissions);
    dispatch(
      setUserInfo({
        permissions,
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
        <Input
          prefix={<Iconify icon="ant-design:user-outlined" size={18} />}
          placeholder="admin"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<Iconify icon="ant-design:lock-outlined" size={18} />}
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
