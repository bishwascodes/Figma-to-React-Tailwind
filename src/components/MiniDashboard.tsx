import React from 'react'
import Header from './MiniDashboard/Header'
import BigCards from './MiniDashboard/BigCards'
import ProjectCard from './MiniDashboard/ProjectCard'

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
        <div className="bg-white rounded-xl p-6 mt-6">
          <h2 className="text-xl font-bold text-[#0F172A] mb-4">
            Recent Projects
          </h2>

          <ProjectCard
            title="Website Redesign"
            buttonText="In Progress"
          />

          <ProjectCard
            title="Mobile Application"
            buttonText="Planning"
          />

          <ProjectCard
            title="Customer Portal"
            buttonText="Completed"
          />
        </div>

      </div>
    </div>
  );
};

export default MiniDashboard;