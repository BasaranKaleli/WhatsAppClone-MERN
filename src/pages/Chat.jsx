import React from "react";

const Chat = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white overflow-hidden">
      <div className="relative flex flex-col items-center justify-center bg-white text-gray-900 rounded-2xl shadow-lg max-w-md mx-4 p-6 md:p-8 lg:p-10 transition-transform transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-30 rounded-2xl -z-10 transition-opacity duration-500 ease-in-out"></div>
        <img
          className="mx-auto mb-4 h-20 md:h-24 lg:h-28 xl:h-32 transition-transform duration-500 ease-in-out hover:scale-110"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
          alt="WhatsApp"
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-green-600 drop-shadow-md transition-transform duration-500 ease-in-out hover:scale-105">
          Hoşgeldiniz!
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-700 transition-opacity duration-500 ease-in-out hover:text-gray-800">
          Sohbete başlamak için gerekli bilgileri girdiniz. Her şey hazır!
        </p>
        <button className="relative bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg">
          Sohbete Başla
          <div className="absolute inset-0 bg-green-800 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-20 rounded-lg"></div>
        </button>
        <div className="absolute inset-x-0 bottom-0 p-2 flex justify-center">
          <p className="text-xs text-gray-500 transition-opacity duration-500 ease-in-out hover:text-gray-600">
            <span className="font-medium"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
