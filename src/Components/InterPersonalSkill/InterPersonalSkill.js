import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'

const InterPersonalSkill = ({interpersonalskill}) => {
    const percentage = 66;
  return (
    <div className="mt-1">
      <div style={{ width: 50, height: 55 ,marginLeft:'20px'}} >
      <CircularProgressbar value={percentage} text={`${(interpersonalskill.value)}%`} />
      </div>
      
     
      <div className="flex justify-center items-center">
      <h6
        style={{ fontSize: "9px", marginBottom: "3px"}}
        className="mr-3"
      >
        {interpersonalskill.title}
      </h6>
      </div>
      
    </div>
  )
}

export default InterPersonalSkill