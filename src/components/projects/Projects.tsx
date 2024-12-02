import "./Projects.css"

const Projects = () => {
    return ( 
        <section className="projects">
            <h1>PROJECTS</h1>
            <div className="show__projects">
                <div className="project">
                    <h3>Project 1</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, veniam.
                    </p>
                    <p className="project__tools">
                        TypeScript React Sass
                    </p>
                </div>
                <div className="project">
                    <h3>Project 2</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, veniam.
                    </p>
                    <p className="project__tools">
                        TypeScript React Sass
                    </p>
                </div>
                <div className="project">
                    <h3>Project 3</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, veniam.
                    </p>
                    <p className="project__tools">
                        TypeScript React Sass
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Projects;