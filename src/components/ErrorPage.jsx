import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="bg-black h-screen flex justify-center items-center text-white">
      <div>
        <h1 className="text-4xl font-bold">oops...Something went wrong...</h1>

        <h2 className="text-2xl font-bold text-center pt-10">
          {err.status}:{err.statusText}!..............
        </h2>
      </div>
    </div>
  );
};

export default Error;
