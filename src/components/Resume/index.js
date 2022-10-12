import React from "react";

export default function Resume() {
  return (
    <div className="">
      <div className="">
        <p className="page-title text-center">Resume</p>

        <a
          className=""
          href={process.env.PUBLIC_URL + "/Mike_Levy_Resume.pdf"}
          target="_blank" rel="noreferrer"
        >
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="">
        <p className="">Skills</p>

        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>React, Express, MongoDB, Node</li>
            <li>Bootstrap, Bulma, Wordpress</li>
            <li>Git, GitHub, SQL, NoSQL </li>
            <li>APIs, MVC, OOP, PWAs</li>
            <li>Adobe Photoshop, Illustrator</li>
        </ul>
      </div>
    </div>
  );
}
