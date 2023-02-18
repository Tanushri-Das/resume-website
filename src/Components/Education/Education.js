import React from 'react'

const Education = ({education}) => {

  return (
    <div className='text-left mb-3'>
        <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-normal float-left mr-3">{education.start_date} - {education.end_date}</h6>
        <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-semibold">{education.place}</h6>
        <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-semibold">{education.class}</h6>
        <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-bold">{education.college}</h6>
    </div>
  )
}

export default Education