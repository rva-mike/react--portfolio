import React from 'react'
import Proj from "../Proj"
import bcChamp from "../../assets/bcChamp.png"
// import techTalk from '../../assets/tech-talk.png'
import codeQuiz from '../../assets/code-quiz.png'
import noteTaker from '../../assets/note-taker.png'
import readMePic from '../../assets/read-me.png'
import teamGen from '../../assets/team-profile.png'
import subatomic from '../../assets/subatomic.png'

const projects = [
    {
        id: 0,
        title: "Boot Camp Champ",
        image: bcChamp,
        description: "This a full-stack application made by a group of individuals as a forum and networking tool for anyone who has been in, completed, or is interested in the University of Richmond's Web Development and Coding Boot Camp.",
        link: "https://boot-camp-champ-app.herokuapp.com/",
        repo: "https://github.com/chou8395-XOMYwl/bootcamp-champ",
    },
    {
        id: 1,
        title: "Sub Atomic",
        image: subatomic,
        description: "This app is designed to help find substitute teacher. 'Sub Atomic' uses the MERN (MongoDB, Express.js, React, and Node.js) tech stack. It combines a back-end implemented with Node.js and Express.js API with a MongoDB database using a React front-end to create a single-page MERN application. ",
        link: "https://sub-atomic-mern.herokuapp.com/",
        repo: "https://github.com/rva-mike/Substitute-Finder",
    },
    {
        id: 3,
        title: "Code Quiz",
        image: codeQuiz,
        description: "This is a Coding Quiz built with HTML, CSS, and JS. This app has the ability to store and display high scores from localStorage.",
        link: "https://rva-mike.github.io/Code-Quiz/",
        repo: "https://github.com/rva-mike/Code-Quiz",
    },
    {
        id: 4,
        title: "Note Taker App",
        image: noteTaker,
        description: "This application can be used to write, save, and delete notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file. It also uses the 'uuid' npm package.",
        link: "https://note-taker-app-xyz.herokuapp.com/",
        repo: "https://github.com/rva-mike/Note-Taker",
    },
    {
        id: 5,
        title: "ReadMe Generator",
        image: readMePic,
        description: "This is a command-line application that dynamically generates a professional README.md file from a user's input using Node.js, the Inquirer package, and the File System fs.writeFile.",
        link: "https://drive.google.com/file/d/1_HCSuD-1_jPfmbvNzTQE3JucdRv9boOZ/view",
        repo: "https://github.com/rva-mike/README-Generator",
    },
    {
        id: 5,
        title: "Team Profile Generator",
        image: teamGen,
        description: "This is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.",
        link: "https://drive.google.com/file/d/17FJbc68WeY2KRMey-qVWv_pXNQuXpoho/view",
        repo: "https://github.com/rva-mike/Team-Profile-Generator",
    },
];


export default function Portfolio() {
    return (
        <div>
            <p className="page-title text-center">Portfolio</p>
            <Proj projects={projects} />
        </div>
    );
}