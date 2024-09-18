import { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";

import PageError from "@/pages/sys/page-error/PageError";

// interface AuthGuardProps extends PropsWithChildren {}

export const AuthGuard = ({ children }: PropsWithChildren) => {
  // const router = useRouter();
  // const { accessToken } = useUserToken();

  // const check = useCallback(() => {
  //   if (!accessToken) {
  //     router.replace('/login');
  //   }
  // }, [router, accessToken]);

  // useEffect(() => {
  //   check();
  // }, [check]);

  return (
    <ErrorBoundary FallbackComponent={PageError}>{children}</ErrorBoundary>
  );
};
