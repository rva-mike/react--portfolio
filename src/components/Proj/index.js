import React from 'react'

export default function Project(props) {
    return (
        <div>
            <div className="proj-cards">
                {props.projects.map((project) => (
                    <div class="card" key={project.id}>
                        <img src={process.env.PUBLIC_URL + project.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{project.title}</h5>
                            <p class="card-text">{project.description}</p>
                            <a href={project.repo} class="btn btn-primary">Go to repo</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
