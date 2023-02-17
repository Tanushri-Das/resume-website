import React, { useEffect, useState } from 'react'
import LeftSide from '../../Components/LeftSIde/LeftSide';
import './Resume.css';

import RightSide from '../../Components/RightSide/RightSide';

const Resume = () => {
    const [information,setInformation]=useState([]);

    useEffect(()=>{
        fetch('data.JSON')
        .then(res => res.json())
        .then(data => setInformation(data))
    },[])

  return (
    //  style={{border:'2px solid blue'}}
    <div className='resume-container'>
        <div className='leftside'>
        
        {
            information.map((data)=><LeftSide data={data}></LeftSide>)
        }
            
        </div>
        <div className='rightside'>
        {
            information.map((data)=><RightSide data={data}></RightSide>)
        }
        </div>
    </div>
  )
}

export default Resume