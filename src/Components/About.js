import React from 'react'
import { skill } from '../Data'
import Skill from './Skill'

const About = () => {
  return (
    <section id="about" className="about">
        <div className="container">
            <div className="row">
                <div className="col-11 m-auto">
                    <div className="section-title">
                        <h2>&lt;About me /&gt;</h2>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-6 col-md-6 content">
                            <p>I'm Vishnu Sangammanavar, a enthusiastic learner with a focus on web development. I am skilled in frontend development using HTML, CSS, JavaScript, and ReactJs. And Have Knowledge Of Working With APIs. With A constant thirst for knowledge, I actively participate in Hackathons and coding events to enhance my skills. I have a strong command of programming languages like C, C++, Java, Python, and JavaScript, which I utilize to build robust and efficient applications.</p>
                            <h3>Achievements:</h3>
                            <ol>
                                <li>Best Student Cabinet (Placement secretary)</li>
                                <li>Placement Secretary for the year 2022 - 2023.</li>
                                <li>Winner of Code-e-thon event conducted by Gogte Institute of technology.</li>
                                <li>Won 2nd position in coding event conducted by KLE Institute of Technology, Hubbali.</li>
                                <li>Participated in Ganaka Vidya National Level Hackathon conducted by Jain College Of Engineering, Belagavi Dept of MCA.</li>
                            </ol>
                        </div>
                        <div className="col-lg-6 col-md-6 skill-list">
                        {
                            skill.map((value, index) => {
                                return (
                                    <Skill {...value} key={index} />
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About