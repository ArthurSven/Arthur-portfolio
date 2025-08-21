import React from 'react';
import SocialMedia from "@/lib/components/utils/SocialMedia.jsx";

const Hero = () => {
    return (
        <section className="min-h-[calc(50vh-4rem)] flex items-center justify-center py-16">
            <div className="w-full max-w-screen-xl px-4 mx-auto">
                <div className=" rounded-lg p-8 md:p-12 text-center">
                    <h1 className="text-white text-4xl md:text-4xl font-bold mb-2">Hey! I am <span className="text-blue-600">Arthur Sven Msiska</span>
                    </h1>
                    <p className="font-normal text-2xl text-gray-100 mt-6 mb-6">An enthusiastic <span className="text-blue-600">Software Developer</span> with
                        experience building Mobile and Web Apps, using a vast tech stack to solve business and social
                        problems.</p>
                    <SocialMedia/>
                </div>
            </div>
        </section>
    );
};

export default Hero;