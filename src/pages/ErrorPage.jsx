import { useRouteError,Link } from "react-router-dom";
function ErrorPage() {
  const eror = useRouteError();
  if (eror.status == 404) {
    return (
      <div className="grid text-3xl text-primary place-items-center mt-[500px]">
      <h1 className="">Pages Not Found</h1>
      <Link className="btn  mt-5 btn-neutral" to="/">Go Home</Link>
    </div>
    );
  }
  return (
    <div className="grid  text-3xl text-primary place-items-center mt-[500px]">
      <h1 className="">Somating went wrong :(</h1>
      <Link className="btn mt-5  btn-neutral" to="/">Go Home</Link>
    </div>
  );
}

export default ErrorPage;
