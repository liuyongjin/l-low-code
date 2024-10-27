import { PropsWithChildren, useCallback, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { useRouter } from "@/hooks";
import PageError from "@/pages/sys/page-error";
import { useUserInfo } from "@/store";

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { token } = useUserInfo();

  const check = useCallback(() => {
    if (!token) {
      router.replace("/login");
    }
  }, [token, router]);

  useEffect(() => {
    check();
  }, [check]);

  return (
    <ErrorBoundary FallbackComponent={PageError}>{children}</ErrorBoundary>
  );
};
