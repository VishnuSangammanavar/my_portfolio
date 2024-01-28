import React from 'react'

const Skill = ({title, skills}) => {
  return (
    <div className="skill">
        <h3>{title}</h3>
        <div className="skills">
        {
            skills.map((value, index) => {
                return (
                    <img src={value.url} alt={value.alternate} key={index} />
                )
            })
        }
        </div>
    </div>
  )
}

export default Skill