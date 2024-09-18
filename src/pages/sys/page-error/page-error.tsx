import type { FallbackProps } from "react-error-boundary";
import { Helmet } from "react-helmet-async";

// const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

export default function PageError({}: FallbackProps) {
  return (
    <div>
      <Helmet>
        <title>Sorry, Page error occurred!</title>
      </Helmet>
    </div>
  );
}
