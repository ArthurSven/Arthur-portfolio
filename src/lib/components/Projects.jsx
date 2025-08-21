import React from 'react';
import projekts from './content/projects.json';
import ExperienceCard from "@/lib/components/utils/ExperienceCard.jsx";
import ProjectCard from "@/lib/components/utils/ProjectCard.jsx";

const Projects = () => {
    return (
        <section id="projects">
            <div className="w-full max-w-screen-xl pt-16 px-4 mx-auto">
                <h2 className="text-4xl text-white">Projects</h2>
                <div className="text-white text-justify pt-5 ms-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projekts.map((project, index) => (
                            <ProjectCard
                                key={index}
                                name={project.name}
                                description={project.description}
                                image={project.image}
                                tech={project.tech}
                                github={project.github}
                                demo={project.demo}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;