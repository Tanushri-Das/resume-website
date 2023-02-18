import React from "react";
import { CProgress, CProgressBar } from "@coreui/react";

import "react-circular-progressbar/dist/styles.css";

const ComputerSkills = ({ skill }) => {
  console.log(skill.value);


  return (
    <div className="mt-1">
      <div>
        <h6 style={{ fontSize: "9px", marginBottom: "3px" ,float:'left'}} className="mr-3">
          {skill.title}
        </h6>
        <div>
        <CProgress height={10} className="mb-3">
          <CProgressBar color="info" animated value={skill.value} />
        </CProgress>
        </div>

        
      </div>
    </div>
  );
};

export default ComputerSkills;
