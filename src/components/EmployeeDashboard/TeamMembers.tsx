import { FiArrowRight } from 'react-icons/fi'
import EmployeeRow, { type Employee } from './EmployeeRow'

type TeamMembersProps = {
  employees: Employee[];
  totalCount: number;
};

const TeamMembers = ({ employees, totalCount }: TeamMembersProps) => {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5">

      {/* Card header */}
      <div className="flex justify-between items-start gap-4 pb-5 border-b border-[#E2E8F0]">
        <div>
          <h2 className="text-[#1E293B] font-bold text-lg">Team members</h2>
          <p className="text-[#64748B] text-xs mt-1">
            People working across your organization
          </p>
        </div>
        <button className="shrink-0 flex items-center gap-1 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#F1F5F9] px-4 sm:px-6 py-2 text-xs font-semibold text-[#1E293B]">
          View all <FiArrowRight />
        </button>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[1.9fr_1.15fr_1fr] gap-3 border-b border-[#E2E8F0] px-1 sm:px-3 py-3 text-[10px] font-semibold tracking-wider text-[#64748B]">
        <p>EMPLOYEE</p>
        <p className="hidden sm:block">ROLE</p>
        <p>STATUS</p>
      </div>

      {/* Table rows */}
      {employees.map((employee) => (
        <EmployeeRow key={employee.email} {...employee} />
      ))}

      <p className="text-[#64748B] text-xs mt-6">
        Showing {employees.length} of {totalCount} employees
      </p>
    </div>
  );
};

export default TeamMembers;
