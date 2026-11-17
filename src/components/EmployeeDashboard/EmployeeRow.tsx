import StatusBadge, { type EmployeeStatus } from './StatusBadge'
import { type Tone } from './StatCard'

export type Employee = {
  name: string;
  email: string;
  role: string;
  status: EmployeeStatus;
  avatarTone: Tone;
};

// Avatar circle colours for each tone
const avatarStyles: Record<Tone, string> = {
  green: 'bg-[#D9F2E6] text-[#15803D]',
  blue: 'bg-[#DBEAFE] text-[#1E40AF]',
  purple: 'bg-[#EDE4FB] text-[#6D28D9]',
  orange: 'bg-[#F9DCC8] text-[#9A4A22]',
};


const getInitials = (name: string) =>
  name.split(' ').map((part) => part[0]).join('').toUpperCase();

const EmployeeRow = ({ name, email, role, status, avatarTone }: Employee) => {
  return (
    // Phones: 2 columns (role moves under the email). sm and up: 3 columns.
    <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[1.9fr_1.15fr_1fr] items-center gap-3 border-b border-[#E2E8F0] last:border-b-0 px-1 sm:px-3 py-4">
      <div className="flex items-center gap-3 min-w-0">
        <div className={`size-9 shrink-0 rounded-full text-xs font-bold flex items-center justify-center ${avatarStyles[avatarTone]}`}>
          {getInitials(name)}
        </div>
        <div className="min-w-0">
          <p className="text-[#1E293B] text-sm font-semibold truncate">{name}</p>
          <p className="text-[#64748B] text-xs truncate">{email}</p>
          <p className="text-[#475569] text-xs sm:hidden">{role}</p>
        </div>
      </div>

      <p className="hidden sm:block text-[#475569] text-sm">{role}</p>

      <div>
        <StatusBadge status={status} />
      </div>
    </div>
  );
};

export default EmployeeRow;
