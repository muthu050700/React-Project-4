import Header from "./Header";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className=" bg-zinc-900">
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
