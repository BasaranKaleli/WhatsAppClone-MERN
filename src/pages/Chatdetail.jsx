import React from "react";
import { MdOutlineLocationSearching } from "react-icons/md";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InputEmoji from "react-input-emoji";
import * as api from "../api/index";
import moment from "moment";
import { useSelector } from "react-redux";
import Pusher from "pusher-js";

const Chatdetail = () => {
  const [text, setText] = useState("");
  const [personName, setPersonName] = useState(null);
  const [messages, setMessages] = useState([]);
  const { user } = useSelector((state) => state.user);

  const handleOnEnter = async (text) => {
    const messageContent = {
      name: user?.displayName,
      message: text,
      timestamp: new Date(),
      uid: user?.uid,
      roomId: "66b46e8fd02a39df6f328a66",
    };

    const { data } = await api.createMessageApi(messageContent);
  };

  const { id } = useParams();

  useEffect(() => {
    const pusher = new Pusher("3f100950c26fcdc3b2c7", {
      cluster: "eu",
    });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      setMessages((prev) => [...prev, data]);
    });
  }, []);

  useEffect(() => {
    if (id) {
      const detailfunc = async () => {
        const { data } = await api.detailRoomApi(id);
        setPersonName(data);
      };
      const detailMessageFunc = async () => {
        const { data } = await api.detailMessageApi(id);
        setMessages(data);
      };
      detailMessageFunc();
      detailfunc();
    }
  }, [id]);

  return (
    <div className="w-3/4 chatDetail h-screen flex flex-col">
      <div className="h-16 bg-gray-200 px-4 py-2 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full hover:scale-110 transition-transform"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqCzc5A0i6-2DBkGnT8d-_A2YJwmLfsF_Ww&s"
            alt=""
          />
          <div>
            <div className="font-bold text-gray-800">{personName?.name}</div>
            <div className="text-xs text-gray-600">
              {moment(personName?.createdAt).format("MMM DD, YYYY")}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MdOutlineLocationSearching
            size={25}
            className="cursor-pointer text-gray-700 hover:text-gray-800 transition-colors"
          />
          <MdOutlineLocationSearching
            size={25}
            className="cursor-pointer text-gray-700 hover:text-gray-800 transition-colors"
          />
        </div>
      </div>
      <div className="h-full overflow-y-auto px-4 py-6 flex flex-col gap-4">
        {messages?.map((message, index) =>
          message.name === user.displayName ? (
            <div
              className="w-[400px] bg-green-300 rounded-md p-3 ml-auto shadow-md"
              key={index}
            >
              <div className="text-gray-800">{message?.message}</div>
              <div className="text-xs text-gray-600 flex items-center justify-end">
                {moment(message?.createdAt).format("MMM DD, YYYY")}
              </div>
            </div>
          ) : (
            <div
              className="w-[400px] bg-purple-300 rounded-md p-3 shadow-md"
              key={index}
            >
              <div className="text-gray-800">{message?.message}</div>
              <div className="text-xs text-gray-600 flex items-center justify-end">
                {moment(message?.createdAt).format("MMM DD, YYYY")}
              </div>
            </div>
          )
        )}
      </div>
      <div className="bg-white py-2 px-4 shadow-inner">
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="text"
          className="w-full outline-none border-none bg-transparent"
        />
      </div>
    </div>
  );
};

export default Chatdetail;
