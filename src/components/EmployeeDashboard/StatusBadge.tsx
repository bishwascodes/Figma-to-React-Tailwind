export type EmployeeStatus = "Active" | "On leave";

type StatusBadgeProps = {
  status: EmployeeStatus;
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <span
      className={`inline-block rounded-full px-5 py-1 text-xs font-semibold ${
        status === 'Active'
          ? 'bg-[#DCF5EA] text-[#15803D]'
          : 'bg-[#FEF3C7] text-[#B45309]'
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
