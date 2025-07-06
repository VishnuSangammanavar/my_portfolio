import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import { GitHub } from '@mui/icons-material';

const Project = ({projectUrl, githubLink, imgUrl, title, desc, tags}) => {
  return (
    <div className="project">
        <a href={projectUrl} target="_blank">
            <div className="image" style={ {backgroundImage: imgUrl} }>
                <LaunchIcon className='share' />
            </div>
        </a>
        <div className="info">
            <div className="access-links">
                <a href={projectUrl} className='link'>live</a>
                <a href={githubLink} className='github'><GitHub fontSize='large' /></a>
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="tags">
            {
                tags.map((value, index) => {
                    return (
                        <div className="tag" key={index}>{value}</div>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Project