import React from "react";
import {
  FaBong,
  FaBowlingBall,
  FaExpand,
  FaPortrait,
  FaRProject,
  FaTable,
} from "react-icons/fa";

import Social from "../Social/Social";
import ComputerSkills from "../ComputerSkills/ComputerSkills";
import InterPersonalSkill from "../InterPersonalSkill/InterPersonalSkill";

const RightSide = ({ data }) => {
  const project2 = data?.data?.projects[1];
  return (
    <div className="text-left" style={{ marginLeft: "40px"}}>
      <div
        style={{ fontSize: "22px", marginBottom: "26px", marginLeft: "30px" }}
      >
        <h5
          style={{ fontWeight: "700", fontSize: "10px", marginBottom: "3px" }}
        >
          Date of Birth :{" "}
          <span className="font-normal">
            {data?.data?.basicinfo?.date_of_birth}
          </span>
        </h5>
        <h5
          style={{ fontWeight: "700", fontSize: "10px", marginBottom: "3px" }}
        >
          Phone Number :{" "}
          <span className="font-normal">{data?.data?.basicinfo?.phone}</span>
        </h5>
        <h5
          style={{ fontWeight: "700", fontSize: "10px", marginBottom: "3px" }}
        >
          Email address :{" "}
          <span className="font-normal">{data?.data?.basicinfo?.email}</span>
        </h5>
        <h5
          style={{ fontWeight: "700", fontSize: "10px", marginBottom: "3px" }}
        >
          Website :{" "}
          <span className="font-normal">{data?.data?.social?.website}</span>
        </h5>
      </div>

      <div style={{ marginLeft: "10px"}}>
        <div className="flex items-center">
          <FaRProject
            style={{ float: "left", fontSize: "14px", marginRight: "6px" }}
            className="text-blue-500"
          />
          <p
            className="text-blue-500"
            style={{ fontSize: "14px", fontWeight: "600", marginTop: "14px" }}
          >
            Projects
          </p>
        </div>

        <div style={{ marginLeft: "20px" }} className="text-left">
          <h6
            style={{ fontSize: "9px", marginBottom: "3px" }}
            className="font-normal"
          >
            {project2.createdAt} - {project2.updatedAt}
          </h6>
          <h6 style={{ fontSize: "9px", marginBottom: "3px" }}>
            {project2.project}
          </h6>
          <h6
            style={{ fontSize: "9px", marginBottom: "3px" }}
            className="font-normal"
          >
            {project2.organisation}
          </h6>
          <h6
            style={{ fontSize: "9px", marginBottom: "3px" }}
            className="font-normal"
          >
            {project2.project_detail}
          </h6>
        </div>
      </div>
      <div style={{ marginTop: "61px", marginLeft: "10px"}}>
        <div className="flex items-center">
          <FaTable
            style={{ float: "left", fontSize: "14px", marginRight: "6px" }}
            className="text-blue-500"
          />
          <p
            className="text-blue-500"
            style={{ fontSize: "14px", fontWeight: "600", marginTop: "14px" }}
          >
            Interpersonal Skills
          </p>
        </div>
        <div className="grid grid-cols-3 justify-center items-center">
          {data?.data?.interpersonal_skills?.interpersonal_skills?.map(
            (interpersonalskill) => (
              <InterPersonalSkill
                interpersonalskill={interpersonalskill}
              ></InterPersonalSkill>
            )
          )}
        </div>
      </div>

      <div style={{ marginLeft: "10px", marginTop: "59px"}}>
        <div className="flex items-center">
          <FaBong
            style={{ float: "left", fontSize: "14px", marginRight: "6px" }}
            className="text-blue-500"
          />
          <p
            className="text-blue-500"
            style={{ fontSize: "14px", fontWeight: "600", marginTop: "14px" }}
          >
            Computer Skills
          </p>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <h4 style={{ fontSize: "10px" }} className="pb-1">
            - Software
          </h4>
          {data?.data?.skills?.skills?.map((skill) => (
            <ComputerSkills skill={skill}></ComputerSkills>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "32px", marginLeft: "10px"}}>
        <div className="flex items-center">
          <FaExpand
            style={{ float: "left", fontSize: "14px", marginRight: "6px" }}
            className="text-blue-500"
          />
          <p
            className="text-blue-500"
            style={{ fontSize: "14px", fontWeight: "600", marginTop: "14px" }}
          >
            Social Media
          </p>
        </div>

        <Social data={data}></Social>
      </div>
    </div>
  );
};

export default RightSide;
