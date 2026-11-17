import ActivityItem, { type Activity } from './ActivityItem'

type RecentActivityProps = {
  activities: Activity[];
};

const RecentActivity = ({ activities }: RecentActivityProps) => {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 flex flex-col">

      {/* Card header */}
      <div className="pb-5 border-b border-[#E2E8F0]">
        <h2 className="text-[#1E293B] font-bold text-lg">Recent activity</h2>
        <p className="text-[#64748B] text-xs mt-1">Latest team updates</p>
      </div>

      {/* Activity list (grows to push the callout to the bottom when the card is tall) */}
      <div className="flex-1">
        {activities.map((activity) => (
          <ActivityItem key={activity.title} {...activity} />
        ))}
      </div>

      {/* Callout at the bottom of the card */}
      <div className="mt-5 rounded-lg bg-[#EEF7F2] px-4 py-3">
        <p className="text-[#15654F] text-xs font-semibold">Keep the team moving</p>
        <p className="text-[#64748B] text-[11px] mt-0.5">
          Check pending reviews this week.
        </p>
      </div>
    </div>
  );
};

export default RecentActivity;
