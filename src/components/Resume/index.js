import React from "react";

export default function Resume() {
    return (
        <div className="">
            <div className="">
                <p className="page-title text-center">Resume</p>
                <div className="text-center">
                    <a
                        className="text-center"
                        href={process.env.PUBLIC_URL + "/Mike_Levy_Resume.pdf"}
                        target="_blank" rel="noreferrer"
                    >
                        <button className="btn btn-primary text-white">Download Resume</button>
                    </a>
                </div>
            </div>
            <div className="">
                <p className="text-center mb-1 mt-4"><strong>Skills</strong></p>

                <p className="text-center">
                    <li>HTML, CSS, Javascript</li>
                    <li>React, Express, MongoDB, Node</li>
                    <li>Bootstrap, Bulma, Wordpress</li>
                    <li>Git, GitHub, SQL, NoSQL </li>
                    <li>APIs, MVC, OOP, PWAs</li>
                    <li>Adobe Photoshop, Illustrator</li>
                </p>
            </div>
        </div>
    );
}
