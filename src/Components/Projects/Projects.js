import React from 'react'

const Projects = ({project}) => {
    // console.log(project.project)
  return (
    <div className='text-left mb-3'>
      <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-normal">{project.createdAt}-{project.updatedAt}</h6>
        <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-normal">{project.project}</h6>
        {/* <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-normal">{project.organisation}</h6>
        <h6 style={{fontSize:'9px',marginBottom:'3px'}} className="font-normal">{project.project_detail}</h6> */}
    </div>
  )
}

export default Projects