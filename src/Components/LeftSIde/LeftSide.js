import React from 'react';
import { FaGraduationCap, FaRProject, FaShoppingBag, FaUser } from "react-icons/fa";
import Education from '../Education/Education';
import Experience from '../Experience/Experience';


const LeftSide = ({data}) => {

  const project1=data?.data?.projects[0];

  return (
    <div>
        <div style={{marginLeft:'20px'}}>
        <h1 style={{border:'2px solid blue',borderStyle:'double',width:'140px',fontSize:'20px',fontWeight:'700',padding:'13px 0',marginBottom:'30px',paddingLeft:'22px'}}>{data?.data?.basicinfo?.firstName} {data?.data?.basicinfo?.lastName}</h1>
        </div>
        <div>
        <div className='flex items-center'>
        <FaUser style={{float:'left',fontSize:'14px',marginRight:'6px'}} className="text-blue-500"/>
        <p className='text-blue-500' style={{fontSize:'14px',fontWeight:'600',marginTop:'14px'}}>Resume Objective</p>
        </div>
        <p className='text-justify' style={{fontSize:'9px',marginLeft:'20px'}}>{data?.data?.resume_objective?.objective}</p>
       
       </div>
       <div>
        <div className='flex items-center'>
        <FaShoppingBag style={{float:'left',fontSize:'14px',marginRight:'6px',marginBottom:'4px'}} className="text-blue-500"/>
        <p className='text-blue-500' style={{fontSize:'14px',fontWeight:'600',marginTop:'14px'}}>Working Experience</p>
        </div>
       
        <div style={{marginLeft:'20px'}}>
          {
            data?.data?.professionalexperience?.slice(0)
            .reverse().map(experience=><Experience experience={experience}></Experience>)
          }
        </div>
       
       </div>
       <div className='mt-[24px]'>

        <div className='flex items-center'>
        
        <div className='flex items-center'>
        <FaGraduationCap style={{float:'left',fontSize:'14px',marginRight:'6px'}} className="text-blue-500"/>
        <p className='text-blue-500' style={{fontSize:'14px',fontWeight:'600',marginTop:'14px'}}>Education</p>
        </div>
        </div>

        <div style={{marginLeft:'20px'}} className="mt-3">
          {
            data?.data?.education?.map(education=><Education education={education}></Education>)
          }
        </div>
       
       </div>
       <div>
       
        <div className='flex items-center' style={{marginTop:'35px'}}>
        <FaRProject style={{float:'left',fontSize:'14px',marginRight:'6px'}} className="text-blue-500"/>
        <p className='text-blue-500' style={{fontSize:'14px',fontWeight:'600',marginTop:'14px'}}>Projects</p>
        </div>

        <div  className="text-left p-3">
          
          <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-normal">{project1.createdAt} - {project1.updatedAt}</h6>
          <h6 style={{fontSize:'9px',marginBottom:'3px'}}>{project1.project}</h6>
          <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-semibold">{project1.organisation}</h6>
          

          <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-normal">{project1.project_detail}</h6>
        </div>
       
       </div>
    </div>
  )
}

export default LeftSide