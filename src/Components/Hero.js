import React from 'react'
import Social from './Social';

const Hero = () => {
  return (
    <section id="hero" className="hero">
        <div className="container">
            <div className="row">
                <div className="col-11 m-auto">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-lg-7 col-md-6 hero-content">
                            <h1>Hi, I'm <br />Vishnu Sangammanavar</h1>
                            <span>Eat -&gt; Sleep -&gt; Code -&gt; Repeat</span>
                            <p>Enthusiastic frontend developer with a strong foundation in modern web technologies, including React, HTML, CSS, JavaScript, Tailwind CSS. Skilled in programming language such as Java, Python. Passionate about developing user-friendly, high-performance web-applications. Adept at problem-solving, logical thinking, and collaborating in team environment, Eager to contribute to innovative projects and grow within a dynamic organization.</p>
                            <a href="https://drive.google.com/file/d/1-o8Hf3dwfaB2-rwUhQIvtY1EIfLozqOG/view?usp=drive_link" className="btn btn-outline-danger hire">Get my resume</a>
                        </div>
                        <div className="col-lg-4 col-md-6 image">
                            <img src="./img/myimg.jpg" alt="My image" />
                        </div>
                    </div>
                    <Social />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero