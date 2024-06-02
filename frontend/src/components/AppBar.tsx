import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    <div className="flex justify-between h-12 bg-slate-100 items-center">
      <div className="text-md px-3">
        <Link to="/blogs">Blogs Website</Link>
      </div>
      <div className="pr-3 flex ">
        <button className=" bg-green-500 p-1 mr-5 pr-2 pl-2  rounded-full">
          <Link to="/publish">Publish</Link>
        </button>
        <Link
          to="/signup"
          onClick={() => {
            localStorage.clear();
          }}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};
