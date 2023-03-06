import React from "react";

export default function ProjectCard({
  projectTitle,
  projectDescription,
  src,
  githubLink,
  websiteLink,
}) {
  return (
    <div
      className="w-full largerLaptop:px-12 h-auto largerLaptop:py-10 rounded-lg 
      shadow-shadowOne px-5 py-5 flex flex-col bg-gradient-to-r from-bodyColor
       to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 
       transition-colors duration-1000"
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110
        duration-300 cursor-pointer"
          src={src}
          alt=""
        />
      </div>
      <div className="w-full mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-red-600">{projectTitle}</h3>
          <div className="flex gap-3">
            <span
              className="text-lg w-10 h-10 rounded-full bg-black 
            inline-flex justify-center items-center text-gray-400
            hover:text-designColor duration-200 cursor-pointer"
            >
              {" "}
              {githubLink}
            </span>
            <span
              className="text-lg w-10 h-10 rounded-full bg-black 
              inline-flex justify-center items-center text-gray-400
              hover:text-designColor duration-200 cursor-pointer"
            >
              {" "}
              {websiteLink}
            </span>
          </div>
        </div>
        <div className="mt-5 text-md largerTablet:text-xl">
          {projectDescription}
        </div>
      </div>
    </div>
  );
}
