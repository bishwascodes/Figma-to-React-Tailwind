import { type IconType } from 'react-icons'

export type Tone = "green" | "blue" | "purple" | "orange";

type StatCardProps = {
  title: string;
  value: number | string;
  note: string;
  icon: IconType;
  tone: Tone;
};

// Icon circle colours for each tone
const iconStyles: Record<Tone, string> = {
  green: 'bg-[#D9F2E6] text-[#15803D]',
  blue: 'bg-[#DBEAFE] text-[#2563EB]',
  purple: 'bg-[#EDE4FB] text-[#7C3AED]',
  orange: 'bg-[#FEF3C7] text-[#D97706]',
};

// Icon is renamed to a capital letter so it can be rendered as <Icon />
const StatCard = ({ title, value, note, icon: Icon, tone }: StatCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] p-5">
      <div className="flex justify-between items-start">
        <p className="text-[#64748B] text-sm">{title}</p>
        <span className={`size-8 rounded-full flex items-center justify-center ${iconStyles[tone]}`}>
          <Icon className="size-4" />
        </span>
      </div>

      <b className="block text-[#1E293B] text-3xl mt-2">{value}</b>

      {/* Orange notes flag something that needs attention */}
      <p className={`text-xs mt-3 ${tone === 'orange' ? 'text-[#D97706]' : 'text-[#12946F]'}`}>
        {note}
      </p>
    </div>
  );
};

export default StatCard;
