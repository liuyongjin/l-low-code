import { Helmet } from "react-helmet-async";

export const Page500 = () => {
  return (
    <>
      <Helmet>
        <title> 500 Internal Server Error!</title>
      </Helmet>
      <div>500</div>
    </>
  );
};
