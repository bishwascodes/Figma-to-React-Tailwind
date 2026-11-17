import { type IconType } from 'react-icons'
import { type Tone } from './StatCard'

export type Activity = {
  title: string;
  meta: string;
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

const ActivityItem = ({ title, meta, icon: Icon, tone }: Activity) => {
  return (
    <div className="flex items-center gap-3 border-b border-[#E2E8F0] py-5">
      <span className={`size-6 shrink-0 rounded-full flex items-center justify-center ${iconStyles[tone]}`}>
        <Icon className="size-3" />
      </span>
      <div>
        <p className="text-[#1E293B] text-xs font-semibold">{title}</p>
        <p className="text-[#64748B] text-[11px]">{meta}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
