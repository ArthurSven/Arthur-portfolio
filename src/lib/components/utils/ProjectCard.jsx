import React from "react";

const ProjectCard = ({ image, name, description, tech, github, demo }) => {
    return (
        <div className="bg-slate-900 text-white rounded-lg shadow-md overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-xl">
            {/* Image */}
            <div className="w-full h-64 bg-slate-800 overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
                        400 × 400
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold group-hover:text-green-400 transition">
                    {name}
                </h3>
                <p className="text-sm text-gray-300 mb-3">{description}</p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t, index) => (
                        <span
                            key={index}
                            className="bg-slate-800 text-green-400 text-xs px-3 py-1 rounded-full transition-colors duration-300 hover:bg-green-500 hover:text-white"
                        >
              {t}
            </span>
                    ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex space-x-3">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-800 hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg text-sm transition duration-300"
                        >
                            GitHub
                        </a>
                    )}
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-800 hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg text-sm transition duration-300"
                        >
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
