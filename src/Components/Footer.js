import React from 'react'
import { tags } from '../Data';

const Footer = () => {
  return (
    <footer id="footer">
        <div className="container">
            <div className="row">
                <div className="col-11 m-auto">
                    <div className="row">
                        <div className="col-lg-12 d-flex flex-column interests">
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