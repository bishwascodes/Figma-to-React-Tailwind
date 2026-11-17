import React from 'react'

type ProjectStatus = "In Progress" | "Planning" | "Completed";

type ProjectCardProps = {
  title: string;
  buttonText: ProjectStatus;
};

// Colors for each status
const statusStyles: Record<ProjectStatus, string> = {
  "In Progress": "bg-[#DBEAFE] text-[#1D4ED8]",
  "Planning": "bg-[#F1F5F9] text-[#475569]",
  "Completed": "bg-[#DCFCE7] text-[#15803D]",
};

const ProjectCard = ({ title, buttonText }: ProjectCardProps) => {
  return (
    <div className="item border-b border-[#E2E8F0] last:border-b-0 py-4 flex justify-between items-center">
      <p className="title text-[#334155]">{title}</p>

      <span className={`w-31 rounded-full py-1.5 text-center text-xs font-semibold ${statusStyles[buttonText]}`}>
        {buttonText}
      </span>
    </div>
  );
};

export default ProjectCard;
