import { Helmet } from "react-helmet-async";

export const Page404 = () => {
  console.log(404);
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found!</title>
      </Helmet>
      <div>40214</div>
    </>
  );
};
