import React from 'react'
import Header from './MiniDashboard/Header'
import BigCards from './MiniDashboard/BigCards'
import ProjectCard from './MiniDashboard/ProjectCard'

type ProjectStatus = "In Progress" | "Planning" | "Completed";

type Project = {
    id: number;
    title: string;
    status: ProjectStatus;
};

const projects: Project[] = [
    { id: 1, title: "Website Redesign", status: "In Progress" },
    { id: 2, title: "Mobile Application", status: "Planning" },
    { id: 3, title: "Customer Portal", status: "Completed" },
];

const MiniDashboard = () => {

    return (
        <div className="min-h-screen bg-[#F1F5F9] px-6 py-10">
            <div className="max-w-[875px] mx-auto">

                {/* Dashboard Header */}
                <Header />

                {/* Dashboard Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
                    <BigCards title="Projects" value={12} />
                    <BigCards title="Tasks" value={48} />
                    <BigCards title="Team Members" value={8} />
                </div>

                {/* Recent Projects Section */}
                <div className="bg-white rounded-xl px-6 pt-6 pb-3 mt-6">
                    <h2 className="text-xl font-bold text-[#0F172A] mb-2">
                        Recent Projects
                    </h2>

                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            buttonText={project.status}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default MiniDashboard;