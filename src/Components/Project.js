import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';

const Project = ({projectUrl, imgUrl, title, desc, tags}) => {
  return (
    <div className="project">
        <a href={projectUrl} target="_blank">
            <div className="image" style={ {backgroundImage: imgUrl} }>
                <LaunchIcon className='share' />
            </div>
        </a>
        <div className="info">
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