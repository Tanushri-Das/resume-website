import React from 'react'
import { FaBong, FaBowlingBall, FaExpand, FaPortrait, FaRProject } from 'react-icons/fa'
import Projects from '../Projects/Projects'
import Skills from '../ComputerSkills/ComputerSkills'
import Social from '../Social/Social'
import ComputerSkills from '../ComputerSkills/ComputerSkills'
import InterPersonalSkill from '../InterPersonalSkill/InterPersonalSkill'

const RightSide = ({data}) => {
  // console.log(data?.data?.social)
  // let text = "";
  // for (let x of data?.data?.skills?.skills) {
  //   text += x ;
  // }
  // console.log((JSON.stringify(text)))
  // const {social}=data
  const project2=data?.data?.projects[1];
  return (
    <div className="text-left">
       <div style={{fontSize:'22px',marginBottom:'26px',marginLeft:'60px'}}>
        <h5 style={{fontWeight:'700',fontSize:'10px',marginBottom:'3px'}}>Date of Birth : <span className='font-normal'>{data?.data?.basicinfo?.date_of_birth}</span></h5>
        <h5 style={{fontWeight:'700',fontSize:'10px',marginBottom:'3px'}}>Phone Number : <span className='font-normal'>{data?.data?.basicinfo?.phone}</span></h5>
        <h5 style={{fontWeight:'700',fontSize:'10px',marginBottom:'3px'}}>Email address : <span className='font-normal'>{data?.data?.basicinfo?.email}</span></h5>
        <h5 style={{fontWeight:'700',fontSize:'10px',marginBottom:'3px'}}>Website : <span className='font-normal'>{data?.data?.social?.website}</span></h5>
       
       </div>
       {/* style={{marginLeft:'40px'}} */}
       <div style={{marginLeft:'40px'}}>
        {/*  style={{border:'1px solid blue'}} */}
        <div className='flex items-center'>
        <FaRProject style={{float:'left',fontSize:'14px',marginRight:'6px'}} className="text-blue-500"/>
        <p className='text-blue-500' style={{fontSize:'14px',fontWeight:'600',marginTop:'14px'}}>Projects</p>
        </div>

        <div style={{marginLeft:'20px'}} className="text-left">
          {/* {
            data?.data?.projects?.map(project=><Projects project={project}></Projects>)
          } */}
          <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-normal">{project2.createdAt} - {project2.updatedAt}</h6>
          <h6 style={{fontSize:'9px',marginBottom:'3px'}}>{project2.project}</h6>
          <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-normal">{project2.organisation}</h6>
          <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-normal">{project2.project_detail}</h6>
        </div>
       
       </div>
       {/* marginLeft:'40px', */}
       <div style={{marginLeft:'40px',marginTop:"34px"}}>
       {/*  style={{border:'1px solid blue'}} */}
      <div className='flex items-center'>
        <FaBong style={{float:'left',fontSize:'14px',marginRight:'6px'}} className="text-blue-500"/>
        <p className='text-blue-500' style={{fontSize:'14px',fontWeight:'600',marginTop:'14px'}}>Interpersonal Skills</p>
        </div>
        <div className='grid grid-cols-3 justify-center items-center'>
          {
            data?.data?.interpersonal_skills?.interpersonal_skills?.map(interpersonalskill=><InterPersonalSkill interpersonalskill={interpersonalskill}></InterPersonalSkill>)
          }
        </div>
       
       </div>
       {/* marginLeft:'40px', */}
       <div style={{marginLeft:'40px',marginTop:"60px"}}>
       {/*  style={{border:'1px solid blue'}} */}
      <div className='flex items-center'>
        <FaBong style={{float:'left',fontSize:'14px',marginRight:'6px'}} className="text-blue-500"/>
        <p className='text-blue-500' style={{fontSize:'14px',fontWeight:'600',marginTop:'14px'}}>Computer Skills</p>
        
        </div>
        <div style={{marginLeft:'20px'}}>
        <h4 style={{fontSize:'10px'}} className="pb-1">- Software</h4>
          {
            data?.data?.skills?.skills?.map(skill=><ComputerSkills skill={skill}></ComputerSkills>)
          }
        </div>
        
        
       
       </div>
       {/* marginLeft:'40px' */}
       <div style={{marginLeft:'40px',marginTop:'37px'}}>
        {/*  style={{border:'1px solid blue'}} */}
       <div className='flex items-center'>
        <FaExpand style={{float:'left',fontSize:'14px',marginRight:'6px'}} className="text-blue-500"/>
        <p className='text-blue-500' style={{fontSize:'14px',fontWeight:'600',marginTop:'14px'}}>Social Media</p>
        </div>

            <Social data={data}></Social>
       
       </div>
    </div>
  )
}

export default RightSide