import React, { useState, useEffect } from "react";
import { MdChat } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Map from "../components/Map";
import Chat from "../components/Chat";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [currentChat, setCurrentChat] = useState(null);
  const dispatch = useDispatch();
  const reduxPosts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    if (reduxPosts.length > 0) {
      setPosts(reduxPosts);
    }
  }, [reduxPosts]);
  useEffect(() => {
    if (categoryFilter) {
      setPosts(reduxPosts.filter((post) => post.category === categoryFilter));
    } else {
      setPosts(reduxPosts);
    }
  }, [categoryFilter, reduxPosts]);

  const handleChat = (post) => {
    setCurrentChat(post);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto mt-16 bg-transparent p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className=" text-sm sm:text-2xl  md:text-4xl text-center font-bold">
            Recent Requests
          </h2>
          <div className="flex flex-col justify-center items-center">
            <label className="mr-2 text-gray-700">Filter by Category:</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="p-2 sm:text-2xl md:text-[16px] border border-gray-300 rounded-md"
            >
              <option value="">All Categories</option>
              <option value="Tools">Tools</option>
              <option value="Transport">Transport</option>
              <option value="Emergency">Emergency</option>
            </select>
          </div>
        </div>

        <div className="space-y-4 bg-slate-100 p-3 rounded-2xl font-bold">
          {posts.length === 0 ? (
            <p>No posts available</p>
          ) : (
            posts.map((post) => (
              <div
                key={post.email}
                className="p-4 border border-gray-300 rounded-md shadow-md mb-4"
              >
                <h3 className="font-semibold">Work : {post.subject}</h3>
                <p>Time: {post.time}</p>
                <p>Location: {post.location}</p>
                <p className="text-sm text-black">Email: {post.email}</p>
                <p className="text-sm text-black">Mobile: {post.phone}</p>
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => handleChat(post)}
                    className="bg-blue-500 text-white p-2 rounded flex items-center"
                  >
                    <MdChat className="mr-2" /> Chat
                  </button>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${post.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-2 rounded flex items-center"
                  >
                    <FaWhatsapp className="mr-2" /> WhatsApp
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Map />
      {/* Show Chat Component if currentChat is set */}
      {currentChat && (
        <Chat post={currentChat} onClose={() => setCurrentChat(null)} />
      )}
    </>
  );
};

export default Home;
