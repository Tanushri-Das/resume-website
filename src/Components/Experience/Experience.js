
import React from 'react';


const Experience = ({experience}) => {
    const {start_date,end_date,designation,about_com}=experience;
    // const d=new Date({start_date}).getUTCDate()
    // console.log(d)
    const {organisation} =experience;
    const splitOrganisation=organisation.split("-")
    const placeName=splitOrganisation[1];
    const companyName=splitOrganisation[0];
    
  return (
    <div className='text-left'>
        <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-normal float-left mr-3">{start_date} - {end_date}</h6>    
          
        <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-semibold my-2">{placeName}</h6>
        <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-semibold my-2">{designation}</h6>
        <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-bold">{companyName}</h6>
        <p style={{fontSize:'9px'}}>{about_com}</p>
    </div>
  )
}

export default Experience