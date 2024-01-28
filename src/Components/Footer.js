import React from 'react'
import { tags } from '../Data';

const Footer = () => {
  return (
    <footer id="footer">
        <div className="container">
            <div className="row">
                <div className="col-11 m-auto">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center achievements">
                            <div className="section-title">
                                <h2>Achievements</h2>
                            </div>
                            <ol>
                                <li>Best Student Cabinet (Placement secretary)</li>
                                <li>Placement Secretary for the year 2022 - 2023.</li>
                                <li>Winner of Code-e-thon event conducted by Gogte Institute of technology.</li>
                                <li>Won 2nd position in coding event conducted by KLE Institute of Technology, Hubbali.</li>
                                <li>Participated in Ganaka Vidya National Level Hackathon conducted by Jain College Of Engineering, Belagavi Dept of MCA.</li>
                            </ol>
                        </div>
                        <div className="col-lg-6 d-flex flex-column interests">
                            <div className="section-title">
                                <h2>I'm interested About</h2>
                            </div>
                            <div className="tags">
                            {
                                tags.map((value, index) => {
                                    return (
                                        <div className="tag" key={index}>
                                            <h3>{value}</h3>
                                        </div>
                                    )
                                })
                            }
                            </div>
                            <div className="hire">
                                <h3>Hire me?</h3>
                                <a href="email:vishnusangammanavar25@gmail.com">Mail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer