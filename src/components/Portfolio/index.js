import React from 'react'
import Proj from "../Proj";


const projects = [
    {
        id: 0,
        title: "Tech Talk",
        image: "",
        description: "Description goes here",
        repo: "https://github.com/rva-mike/Tech-Talk",
    },
    {
        id: 1,
        title: "Code Quiz",
        image: "",
        description: "Description goes here",
        repo: "https://github.com/rva-mike/Code-Quiz",
    },
    {
        id: 3,
        title: "ReadMe Generator",
        image: "",
        description: "Description goes here",
        repo: "https://github.com/rva-mike/README-Generator",
    },
    {
        id: 4,
        title: "Note Taker App",
        image: "",
        description: "description goes here",
        repo: "https://github.com/rva-mike/Note-Taker",
    },
    {
        id: 5,
        title: "E-commerce Backend",
        image: "",
        description: "description goes here",
        repo: "https://github.com/rva-mike/E-commerce-Back-End",
    },
    {
        id: 5,
        title: "Task Master Pro",
        image: "",
        description: "description goes here",
        repo: "https://github.com/rva-mike/taskmaster-pro",
    },
];


export default function Portfolio() {
    return (
        <div>
            <p className="page-title text-center">Portfolio</p>
            <hr />
            <Proj projects={projects} />
        </div>
    );
}