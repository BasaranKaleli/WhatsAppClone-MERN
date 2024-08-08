import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BiCommentDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import * as api from "../api/index";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Pusher from "pusher-js";

const Sidebar = () => {
  const { user } = useSelector((state) => state.user);
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  const persons = [
    {
      name: "Basaran",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqCzc5A0i6-2DBkGnT8d-_A2YJwmLfsF_Ww&ss",
      lastMsg: "deneme deneme",
      date: "12-10-2023",
    },
    {
      name: "Basaran",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqCzc5A0i6-2DBkGnT8d-_A2YJwmLfsF_Ww&ss",
      lastMsg: "deneme deneme",
      date: "12-10-2023",
    },
    {
      name: "Basaran",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqCzc5A0i6-2DBkGnT8d-_A2YJwmLfsF_Ww&ss",
      lastMsg: "deneme deneme",
      date: "12-10-2023",
    },
  ];

  useEffect(() => {
    const pusher = new Pusher("3f100950c26fcdc3b2c7", {
      cluster: "eu",
    });
    const channel = pusher.subscribe("rooms");
    channel.bind("inserted", function (data) {
      setRooms((prev) => [...prev, data]);
    });
  }, []);

  useEffect(() => {
    const allRooms = async () => {
      const { data } = await api.allRoomApi();
      setRooms(data);
    };
    allRooms();
  }, []);

  const addingPerson = async () => {
    const newPrompt = prompt("Yeni bir ad giriniz");
    if (newPrompt) {
      const { data } = await api.createRoomApi({ groupName: newPrompt });
    }
  };

  return (
    <div className="w-1/4 border-r bg-gray-100 h-screen overflow-y-auto">
      <div className="bg-gray-200 h-16 flex items-center justify-between p-3 shadow-md">
        <img
          className="w-10 rounded-full hover:scale-110 transition-transform"
          src={user?.photoURL}
          alt=""
        />
        <div className="flex items-center gap-5">
          <BiCommentDetail
            size={23}
            className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
          />
          <BsThreeDotsVertical
            size={23}
            className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
          />
        </div>
      </div>
      <div className="bg-gray-100 flex items-center p-2 shadow-inner">
        <div className="bg-white flex items-center gap-2 border p-2 rounded-lg flex-1 hover:shadow-md transition-shadow">
          <BiSearch size={20} className="text-gray-600" />
          <input
            className="outline-none border-none bg-transparent flex-1 placeholder-gray-500 focus:placeholder-gray-400"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div
        onClick={addingPerson}
        className="bg-green-600 text-white p-2 m-2 text-center rounded-lg cursor-pointer hover:bg-green-700 transition-colors"
      >
        Add New Person
      </div>
      <div className="space-y-2 p-2">
        {rooms?.map((room, i) => (
          <div
            key={i}
            onClick={() => navigate(`chat/${room._id}`)}
            className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <img
                className="w-10 h-10 rounded-full hover:scale-105 transition-transform"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqCzc5A0i6-2DBkGnT8d-_A2YJwmLfsF_Ww&s"
                alt=""
              />
              <div>
                <div className="font-medium text-gray-800 hover:text-gray-900 transition-colors">
                  {room?.name}
                </div>
                <div className="text-xs text-gray-600 hover:text-gray-700 transition-colors">
                  deneme deneme
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-600 hover:text-gray-700 transition-colors">
              {moment(room?.createdAt).format("MMM DD")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
