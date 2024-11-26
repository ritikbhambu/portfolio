import React from 'react'

function About() {
    return (
        <>
            <div className="aboutpart">
                <div className="aboutcontent">
                    <h1>About us</h1>
                    <p>Hello! I'm <span> Ritik</span> , a passionate web developer with a love for creating dynamic
                        and
                        user-friendly
                        websites. With a background in computer science and years of experience in the industry, I strive to
                        bring innovative solutions to complex problems.I am a self taught prograner , intermidate in <span>C , C++ , PYTHON , HTML5 , CSS3, JS, BOOTSTRAP5 , REACT.JS , NODE.JS , EXPRESS.JS , MONGODBMS </span> currently learning
                        <span> DSA </span>in C++ & <span>FULL STACK WEB DEVELOPMENT</span>.
                        When I'm not coding, you can find me exploring the great outdoors or reading a
                        good
                        book.</p>

                    <div className="aboutbutton">
                        <a href="https://www.linkedin.com/in/ritik-bhambu-937471256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">   <button class="talk"><b>Let's Talks</b></button></a>

                        <a href="./cv/ritik_resume" download="ritik_resume"><button class="resume"><b> Resume <i class="fa-solid fa-circle-down"></i> </b></button></a>

                    </div>

                </div>
                <div className="aboutimg">
                    <img src="./pics/web_image.png " alt="" />

                </div>
            </div>


        </>
    )
}

export default About
