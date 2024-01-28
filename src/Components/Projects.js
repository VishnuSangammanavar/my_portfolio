import React from 'react'
import { project } from '../Data';
import Project from './Project';

const Projects = () => {
  return (
    <section id="projects" className="projects">
        <div className="container">
            <div className="row">
                <div className="col-11 m-auto">
                    <div className="section-title">
                        <h2>&lt;Projects /&gt;</h2>
                    </div>
                    <div className="row project-list">
                    {
                        project.map((value, index) => {
                            return (
                                <Project {...value} key={index} />
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Projects