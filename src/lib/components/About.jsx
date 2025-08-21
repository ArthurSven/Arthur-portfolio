import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="w-full max-w-screen-xl px-4 mx-auto">
                <h2 className="text-4xl text-white">About Me</h2>
                <div className="text-white text-justify pt-5 ms-6">
                    <p className="mt-5">I am software Developer with a focus on digital solutions that bring positive
                        impact to
                        communities. Over the years I have worked across different industries ranging from insurance
                        , language learning and Health Informatics. The idea of using technology to bring positive
                        change is a driving force in my career.
                    </p>
                    <p className="mt-5">
                        My path as as a software Developer begun 5 years ago designing websites with basic HTML and CSS
                        before I transitioned to becoming a PHP Developer. I begun working on freelance gigs building
                        <a href="https://miwalletmw.com/"> <span className="text-blue-600">MiWallet</span></a>, a mobile
                        gateway payment startup turned to a
                        tech startup. 2022, when I joined <a href="https://www.ghii.org/"><span className="text-blue-600">GHII</span></a> where
                        I transitioned to Android Development as my area of expertise, building
                        clinical research Apps before moving to <a href="https://www.oldmutual.co.mw/"><span className="text-blue-600">Old Mutual</span></a>,
                        where I worked on the team that developed
                        Insurance, compliance and investment-centered apps. Here I also became a fullstack Developer
                        developing both Android Apps and fullstack apps on Laravel, Angular and NodeJS.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;