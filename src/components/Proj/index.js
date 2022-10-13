import React from 'react'

export default function Project(props) {
    return (
        <div>
            <div className="proj-cards">
                {props.projects.map((project) => (
                    <div class="card" key={project.id}>
                        <img src={project.image} class="card-img-top" alt="project" />
                        {/* <hr></hr> */}
                        <div class="card-body">
                            <h5 class="card-title"><strong>{project.title}</strong></h5>
                            <p class="card-text">{project.description}</p>
                            
                            <a href={project.link} target="_blank" rel="noreferrer" class="btn btn-primary app-link">Project link</a>
                            
                            <a target="_blank" rel="noreferrer" href={project.repo} class="btn btn-primary" >Go to repo</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}