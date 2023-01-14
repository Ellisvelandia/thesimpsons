import { useEffect, useState } from "react";
import React from "react";
import poster from "../assets/poster.jpg";
import { authors } from "../data/images";

const Info = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://api.sampleapis.com/futurama/info");
      const data = await res.json();
      setInfo(data);
      console.log(data);
    };

    getData();
  }, []);
  return (
    <div className="relative w-full flex justify-center mt-8">
      {info.map((data) => {
        return (
          <div
            key={data.id}
            className="w-full flex flex-col justify-center align-center m-4 text-white font-black text-xl"
          >
            <h1>
              <span className="text-white font-black md:text-7xl text-4xl text-center ">
                synopsis
              </span>
            </h1>
            <img
              src={poster}
              alt="poster"
              className="rounded md:-mt-6 md:-mb-8 my-4 w-full px-2 md:px-20 md:pt-20"
              loading="lazy"
            />
            <p className="md:object-fill object-contain md:-mt-6 md:-mb-8 my-4 px-2 md:p-20 w-full text-justify -h-56">
              {data.synopsis}
            </p>
            <span>yearsAired: {data.yearsAired}</span>
            <hr className="mt-4"/>
            <span className="my-1 text-6xl font-black">creators</span>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full place-content-center mt-8">
              {data.creators.map((creator, index) => (
                <div
                  key={authors[index].id}
                  className="flex items-center justify-center md:px-20 mb-2 shadow-2xl hover:bg-[#459ED3]"
                >
                  <div
                    className="m-4 flex flex-col items-center w-full justify-center"
                    key={creator.id}
                  >
                    <a href={creator.url} target="_blank">
                      <span className="underline">{creator.name}</span>
                    </a>
                    <img
                      src={authors[index].image}
                      alt={authors[index].id}
                      className="w-96 my-2 rounded-full"
                      loading="lazy"
                    />
                    <p className="text-justify h-full">{authors[index].description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
