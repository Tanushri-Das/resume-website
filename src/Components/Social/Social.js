import React from "react";
import { FaGithub, FaLinkedin, FaSkype } from "react-icons/fa";

const Social = ({ data }) => {
  console.log(data?.data?.social);
  const { github, skype, linkedin } = data?.data?.social;
  return (
    <div className="grid grid-cols-3 ml-10 justify-center items-center mt-[8px]">
      <a href={github} target="_blank">
        <FaGithub className="text-3xl" style={{ color: "#0A66C2" }}></FaGithub>
      </a>
      <a href={linkedin} target="_blank">
        <FaLinkedin
          className="text-3xl"
          style={{ color: "#0A66C2" }}
        ></FaLinkedin>
      </a>
      <a href={skype} target="_blank">
        <FaSkype className="text-3xl" style={{ color: "#0A66C2" }}></FaSkype>
      </a>
    </div>
  );
};

export default Social;
