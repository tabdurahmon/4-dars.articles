import { Outlet } from "react-router-dom";

function ListLayout() {
  return (
    <div className="pb-12 mt-10">
      <h2 className="font-semibold text-2xl text-center w-full mb-4 font-serif">
        My List
      </h2>
      <hr className="mb-8" />
      <Outlet />
    </div>
  );
}

export default ListLayout;
