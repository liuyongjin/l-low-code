import { Result } from "antd";
import { createStyles } from "antd-style";
import { m } from "framer-motion";
import { t } from "i18next";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

import { VARIANTS } from "@/constants";

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

export const Page404 = () => {
  const { styles } = useStyles();

  return (
    <>
      <Helmet>
        <title>404 Page Not Found!</title>
      </Helmet>
      <m.div variants={VARIANTS.bounceIn}>
        <Result
          status="404"
          title="404"
          subTitle={t("sys.page.pageNotFound")}
          extra={
            <NavLink to={HOMEPAGE} className={styles.navLink}>
              {t("sys.page.goToHome")}
            </NavLink>
          }
        />
      </m.div>
    </>
  );
};

const useStyles = createStyles(({ token }) => {
  const { colorBgBase, colorPrimary } = token;

  return {
    navLink: {
      background: colorPrimary,
      color: colorBgBase,
      padding: "0.5rem",
      borderRadius: "0.375rem",
    },
  };
});
