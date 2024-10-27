import React from 'react';

function Contact() {
    return (
        <>
            <section id="contact">
                <h1 className="section-header">Contact</h1>

                <div className="contact-wrapper">
                    <form id="contact-form" className="form-horizontal" role="form">
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="NAME"
                                    name="name"
                                    // value=""
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-12">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="EMAIL"
                                    name="email"
                                    // value=""
                                    required
                                />
                            </div>
                        </div>

                        <textarea
                            className="form-control"
                            rows="10"
                            placeholder="MESSAGE"
                            name="message"
                            required
                        ></textarea>

                        <button
                            className="btn btn-primary send-button"
                            id="submit"
                            type="submit"
                            value="SEND"
                        >
                            <div className="alt-send-button">
                                <i className="fa fa-paper-plane"></i>
                                <span className="send-text">SEND</span>
                            </div>
                        </button>
                    </form>

                    <div className="direct-contact-container">
                        <ul className="contact-list">
                            <li className="list-item">
                                <i className="fa-solid fa-location-dot fa-xl">
                                    <span className="contact-text place">CHURU, RAJASTHAN</span>
                                </i>
                            </li>
                            <li className="list-item">
                                <i className="fa-solid fa-phone-volume fa-xl">
                                    <span className="contact-text phone">
                                        <a href="tel:91-9929042405" title="Give me a call">91+ 9929042405</a>
                                    </span>
                                </i>
                            </li>
                            <li className="list-item">
                                <i className="fa-solid fa-envelope fa-xl">
                                    <span className="contact-text gmail">
                                        <a href="mailto:himanshukumawat230@gmail.com" title="Send me an email">himanshu536@gmail.com</a>
                                    </span>
                                </i>
                            </li>
                        </ul>

                        <ul className="social-media-list">
                            <li>
                                <a href="https://www.linkedin.com/in/him
anshu-kumawat-86a22b300"  className="contact-icon">
                                    <i class="fa-brands fa-linkedin fa-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="contact-icon">
                                    <i class="fa-brands fa-github fa-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:himanshukumawat230@gmail.com" target="_blank" className="contact-icon">
                                    <i class="fa-solid fa-envelope fa-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/9929042405" target="_blank" className="contact-icon">
                                    <i class="fa-brands fa-square-whatsapp fa-lg"></i>
                                </a>
                            </li>
                        </ul>

                        <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
