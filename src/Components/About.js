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
                            <ol>
                                <li>Achievements:
                                    <ul type='disc'>
                                        <li><b>Best Student Cabinet(Placement secretary):</b> Awarded for outstanding contributions in managing placement activities and contributing to increased placement success rates.</li>
                                        <li><b>Winner:</b> 1st Place, Coding Competition – KLS Gogte Institute of Technology, showcasing problem solving and development skills.</li>
                                        <li><b>Runner-Up:</b> 2nd Place, Coding Competition – KLE Institute of Technology, Hubballi.</li>
                                        <li>Participated in Ganaka Vidya National Level Hackathon conducted by Jain College Of Engineering, Belagavi Dept of MCA.</li>
                                    </ul>
                                </li>
                                <li>Role Of Responsibilities:
                                    <ul type='disc'>
                                        <li><b>Placement secretary:</b> Led 10+ placement workshops, mock interviews, and drives as Placement Secretary, contributing to a 25% increase in student placement readiness.</li>
                                        <li><b>Coding Event Head:</b> Organized a 50+ participant DSA coding event, enhancing peer engagement and competitive coding culture on campus.</li>
                                    </ul>
                                </li>
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