import React from "react";
import EducationCard from "@/lib/components/utils/EducationCard.jsx";
import education from './content/education.json';


const Education = () => {
    return (
        <section id="education">
            <div className="w-full max-w-screen-xl pt-16 px-4 mx-auto">
                <h2 className="text-4xl text-white">Education</h2>
                <div className="text-white text-justify pt-5 ms-6">
                    {education.map((edu, index) => (
                        <EducationCard
                            key={index}
                            degree={edu.degree}
                            institution={edu.institution}
                            location={edu.location}
                            date={edu.date}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
