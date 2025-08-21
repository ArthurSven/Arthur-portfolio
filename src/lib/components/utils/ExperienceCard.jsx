import React from 'react';

const ExperienceCard = ({role, organisation, duties, date}) => {
    return (
        <div className="bg-slate-900 text-white p-6 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold">{role}</h2>
                <span className="text-sm text-gray-400">{date}</span>
            </div>
            <h3 className="text-sm text-gray-300 mb-4">{organisation}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
                {duties.map((duty, index) => (
                    <li key={index}>{duty}</li>
                ))}
            </ul>
        </div>
    );
};


export default ExperienceCard;