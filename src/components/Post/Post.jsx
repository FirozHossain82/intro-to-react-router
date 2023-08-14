import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const handleNavigation = () =>{
    navigate(`/post/${id}`);
  }
  const { id, title } = post;
  return (
    <div className=" border-2 border-yellow-300 rounded-lg m-3  p-5">
      <h2 className="text-2xl font-bold text-orange-600">ID:{id}</h2>
      <h3 className="text-lg font-semibold text-black">Title:{title}</h3>

      <div className="flex justify-center items-end">
        <button className="border-2 border-amber-300 m-2 p-2 rounded-lg text-bold text-orange-900">
          <Link to={`/post/${id}`}> Details</Link>
        </button>
        <Link to={`/post/${id}`}>
          {" "}
          <button className="bg-green-200 border-2 border-blue-200 m-2 p-2 rounded-md  font-bold ">
            Show Post Details
          </button>
        </Link>
        <button onClick={handleNavigation} className="bg-blue-200 border-2 border-blue-200 m-2 p-2 rounded-md  font-bold ">
          With Button Handler
        </button>
      </div>
    </div>
  );
};

export default Post;
