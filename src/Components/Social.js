import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';

const Social = () => {
  return (
    <div className="social">
        <a href="https://github.com/VishnuSangammanavar" className="social-icons" target="_blank"><GitHubIcon className='icon' /></a>
        <a href="https://www.linkedin.com/in/vishnu-sangammanavar-11230021b/" className="social-icons" target="_blank"><LinkedInIcon className='icon' /></a>
        <a href="https://linktr.ee/vishnusangammanavar" className="social-icons" target="_blank"><CodeIcon className='icon' /></a>
    </div>
  )
}

export default Social