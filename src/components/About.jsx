import React from 'react'

function About() {
    return (
        <>
            <div className="aboutpart">
                <div className="aboutcontent">
                    <h1>About us</h1>
                    <p>Hello! I'm <span>Himanshu Varma</span> , a passionate web developer with a love for creating dynamic
                        and
                        user-friendly
                        websites. With a background in computer science and years of experience in the industry, I strive to
                        bring innovative solutions to complex problems.I am a self taught prograner , intermidate in <span>C , C++ , PYTHON , HTML5 , CSS3, JS, BOOTSTRAP5 , REACT.JS , NODE.JS , EXPRESS.JS , MONGODBMS </span> currently learning
                        <span> DSA </span>in C++ & <span>FULL STACK WEB DEVELOPMENT</span>.
                        When I'm not coding, you can find me exploring the great outdoors or reading a
                        good
                        book.</p>

                    <div className="aboutbutton">
                        <a href="https://www.linkedin.com/in/him
anshu-kumawat-86a22b300">   <button class="talk"><b>Let's Talks</b></button></a>

                        <a href="./cv/HIMANSHURESUME.pdf" download="Himanshu-kumawat_vc.pdf"><button class="resume"><b> Resume <i class="fa-solid fa-circle-down"></i> </b></button></a>

                    </div>

                </div>
                <div className="aboutimg">
                    <img src="https://static.vecteezy.com/system/resources/previews/009/300/319/original/3d-illustration-of-web-development-png.png" alt="" />

                </div>
            </div>


        </>
    )
}

export default About
