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
                            <p>Hello! I am 21 Current student looking to join the workforce to gain real-world experience. I completed my BCA at KLE Society's College of BCA RLSI, Belagavi with aggregate CGPA of 7.9. Ability to complete tasks on time in both individual and team settings. Dedicated worker with excellent computer skills and time management. Very much eager to learn new things.</p>
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