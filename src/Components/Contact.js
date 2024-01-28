import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import Social from './Social';

const Contact = () => {
  return (
    <section id="contact" className="contact">
        <div className="container">
            <div className="row">
                <div className="col-11 m-auto">
                    <div className="row">
                        <div className="col-lg-6 info">
                            <h2 className="title">Contact Me</h2>
                            <div className="contact-us">
                                <a href="mailto:vishnusangammanavar25@gmail.com"><SendIcon className='icon' />vishnusangammanavar25@gmail.com</a>
                                <a href="tel:6360258267"><PhoneIcon className='icon' />+91 6360258267</a>
                            </div>
                            <Social />
                            <a href="Documents/RESUME_2023.pdf" download className="btn btn-outline-danger hire">get my resume</a>
                        </div>
                        <div className="col-lg-6 form">
                            <form action="https://formspree.io/f/xvojrebq" method="post">
                                <input type="text" name="name" placeholder="Your name" id="name" />
                                <input type="email" name="email" placeholder="Your email" id="email" />
                                <textarea name="message" placeholder="Your message" id="message" cols="30" rows="6"></textarea>
                                <button type="submit" className="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact