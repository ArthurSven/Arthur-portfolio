import React from "react";

const EducationCard = ({ degree, institution, location, date }) => {
    return (
        <div className="bg-slate-900 text-white p-6 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold">{degree}</h2>
                <span className="text-sm text-gray-400">{date}</span>
            </div>
            <h3 className="text-sm text-gray-300">{institution}</h3>
            <p className="text-xs text-gray-400 mt-1">{location}</p>
        </div>
    );
};

export default EducationCard;
