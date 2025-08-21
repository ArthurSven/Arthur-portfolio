import React from 'react';
import experiences from './content/experience.json';
import ExperienceCard from "@/lib/components/utils/ExperienceCard.jsx";

const Experience = () => {
    return (
        <section id="experience">
            <div className="w-full max-w-screen-xl pt-16 px-4 mx-auto">
                <h2 className="text-4xl text-white">Work Experience</h2>
                <div className="text-white text-justify pt-5 ms-6">
                    {experiences.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            role={exp.role}
                            organisation={exp.organization}
                            duties={exp.duties}
                            date={exp.date}
                        />
                    ))}
                </div>
            </div>
            </section>
    );
};

                    export default Experience;