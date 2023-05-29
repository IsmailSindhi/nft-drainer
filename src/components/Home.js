import React from "react";
import Comp from "./Comp";
const Home = () => {
  return (
    <div className="px-12 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#2C1553] via-[#020328] to-[#0E125E] h-screen relative overflow-x-hidden">
      <div className=" flex flex-col md:flex-row gap-8 lg:gap-24 items-center justify-center">
        <div className="w-96 text-center text-white bg-[#17114C] rounded-3xl p-6 ">
          <Comp />
        </div>
        <div className="w-80 lg:w-3/6">
          <img src="/nft.png" alt="Not Found" />
        </div>
      </div>
      <div className="w-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-5xl lg:gap-8">
        <button className="bg-[#17114C] hover:bg-blue-700 text-white font-bold py-2 px-4  w-96 lg:w-80 h-20 text-3xl rounded-full">
          Claim Now
        </button>
        <div className="ml-8 lg:ml-0 lg:w-4/6">
          <img src="/line.png" alt="not found" />
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex gap-10 md:gap-20">
          <div className="flex gap-20">
            <div className="text-white flex flex-row items-center gap-4">
              <div className="text-4xl">55K</div>
              <div className="flex flex-col">
                <div className="text-sm text-gray-400">our active</div>
                <div className="text-sm text-gray-400">user</div>
              </div>
            </div>
            <div className="hidden lg:block w-[3px] h-14 rotate-[30deg] bg-gradient-to-b from-[#111AAD] to-[#2C61A8]"></div>
          </div>
          <div className="flex gap-20">
            <div className="text-white flex flex-row items-center gap-4">
              <div className="text-4xl">47K</div>
              <div className="flex flex-col">
                <div className="text-sm text-gray-400">Our</div>
                <div className="text-sm text-gray-400">Artwork</div>
              </div>
            </div>
            <div className="hidden lg:block w-[3px] h-14 rotate-[30deg] bg-gradient-to-b from-[#111AAD] to-[#2C61A8]"></div>
          </div>
        </div>
        <div className="flex gap-10 md:gap-20">
          <div className="flex gap-20">
            <div className="text-white flex flex-row items-center gap-4">
              <div className="text-4xl">42K</div>
              <div className="flex flex-col">
                <div className="text-sm text-gray-400">Available</div>
                <div className="text-sm text-gray-400">Artist</div>
              </div>
            </div>
            <div className="hidden lg:block w-[3px] h-14 rotate-[30deg] bg-gradient-to-b from-[#111AAD] to-[#2C61A8]"></div>
          </div>
          <div className="flex gap-20">
            <div className="text-white flex flex-row items-center gap-4">
              <div className="text-4xl">42K</div>
              <div className="flex flex-col">
                <div className="text-sm text-gray-400">Our</div>
                <div className="text-sm text-gray-400">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
