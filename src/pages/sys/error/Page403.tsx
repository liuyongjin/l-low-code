import { Helmet } from "react-helmet-async";

export const Page403 = () => {
  return (
    <>
      <Helmet>
        <title> 403 No Permission!</title>
      </Helmet>
      <div>403</div>
    </>
  );
};
