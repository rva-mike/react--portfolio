import React from 'react'
import Proj from "../Proj"
import bcChamp from '../../assets/bc--champ.png'
import techTalk from '../../assets/tech-talk.png'
import codeQuiz from '../../assets/code-quiz.png'
import noteTaker from '../../assets/note-taker.png'
import readMePic from '../../assets/read-me.png'
import teamGen from '../../assets/team-profile.png'

const projects = [
    {
        id: 0,
        title: "Boot Camp Champ",
        image: bcChamp,
        description: "This a full-stack application made by a group of individuals as a forum and networking tool for anyone who has been in, completed, or is interested in the University of Richmond's Web Development and Coding Boot Camp.",
        repo: "https://github.com/chou8395-XOMYwl/bootcamp-champ",
    },
    {
        id: 1,
        title: "Tech-Talk",
        image: techTalk,
        description: "This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. ",
        repo: "https://github.com/rva-mike/Tech-Talk",
    },
    {
        id: 3,
        title: "Code Quiz",
        image: codeQuiz,
        description: "This is a Coding Quiz built with HTML, CSS, and JS. This app has the ability to store and display high scores from localStorage.",
        repo: "https://github.com/rva-mike/Code-Quiz",
    },
    {
        id: 4,
        title: "Note Taker App",
        image: noteTaker,
        description: "This application can be used to write, save, and delete notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file. It also uses the 'uuid' npm package.",
        repo: "https://github.com/rva-mike/Note-Taker",
    },
    {
        id: 5,
        title: "ReadMe Generator",
        image: readMePic,
        description: "This is a command-line application that dynamically generates a professional README.md file from a user's input using Node.js, the Inquirer package, and the File System fs.writeFile.",
        repo: "https://github.com/rva-mike/README-Generator",
    },
    {
        id: 5,
        title: "Team Profile Generator",
        image: teamGen,
        description: "This is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. ",
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