import React from 'react'

type ProjectStatus = "In Progress" | "Planning" | "Completed";

type ProjectCardProps = {
  title: string;
  buttonText: ProjectStatus;
};

const ProjectCard = ({ title, buttonText }: ProjectCardProps) => {
  return (
    <div className="item border-b border-[#E2E8F0] py-3 mb-1 flex justify-between items-center">
      <p className="title">{title}</p>

      <button className="rounded-3xl px-7 py-3">
        {buttonText}
      </button>
    </div>
  );
};

export default ProjectCard;
