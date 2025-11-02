
import React from 'react';

const processSteps = [
    { 
        title: 'Concept', 
        description: 'Nemo enim ipsam voluptatem sit aspernatur aut odit aut fugit.',
        points: [
            'Reviewing any existing branding',
            'Target audience and competition research',
            'Developing a strategy',
        ]
    },
    { 
        title: 'Design', 
        description: 'Nemo enim ipsam voluptatem sit aspernatur aut odit aut fugit.',
        points: [
            'Developing wireframes and mockup',
            'Choosing typography, color palettes,',
            'Refining the design',
        ]
    },
    { 
        title: 'Webflow', 
        description: 'Nemo enim ipsam voluptatem sit aspernatur aut odit aut fugit.',
        points: [
            'Testing the website thoroughly launch',
            'Choosing typography, color palettes,',
            'Refining the design',
        ]
    },
]

const Process: React.FC = () => {
    return (
        <section className="py-24 bg-brand-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-brand-lime font-semibold mb-2">--- Working Process</p>
                    <h2 className="text-4xl md:text-6xl font-bold">Your Dream Website In Just Few <br/> Steps</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="bg-brand-dark p-8 rounded-lg">
                            <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                            <p className="text-brand-light-gray mb-6">{step.description}</p>
                            <ul className="space-y-3">
                                {step.points.map((point, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-brand-lime mt-1 mr-3">■</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
