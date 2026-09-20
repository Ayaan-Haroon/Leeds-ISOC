type Event = {
  day: string
  suffix: string
  month: string
  title: string
  description: string
  location: string
}

type EventCardProps = {
  topEvent: Event
  bottomEvent: Event
  rotate?: string
}

const EventCard = ({
  topEvent,
  bottomEvent,
  rotate = '',
}: EventCardProps) => {
  return (
    <div
      className={`event-card bg-[#f2eae0] rounded-[40px] shadow-[0_10px_25px_rgba(0,0,0,0.3)] px-8 py-5 h-[580px] w-[400px] flex flex-col ${rotate}`}
    >
      {/* TOP EVENT */}
      <div className="flex-1 flex flex-col">
        <p className="font-display font-black text-[#254c3a] text-[34px] tracking-[-2px] mb-0">
          {topEvent.day}
          <sup className="text-lg">{topEvent.suffix}</sup> {topEvent.month}
        </p>

        <h3 className="font-display font-black text-[#254c3a] text-[48px] tracking-[-4px] uppercase leading-[42px] mb-2">
          {topEvent.title}
        </h3>

        <p className="font-body text-[#254c3a] text-[14px] tracking-wide uppercase leading-[20px]">
          {topEvent.description}
        </p>

        {/* TOP LOCATION — pushed to bottom of top section */}
        <p className="font-body text-[#254c3a] text-[12px] tracking-wide uppercase mt-auto">
          {topEvent.location}
        </p>
      </div>

      {/* CENTRE DIVIDER */}
      <div className="border-t-[4px] border-[#254c3a] my-4" />

      {/* BOTTOM EVENT */}
      <div className="flex-1 flex flex-col">
        <p className="font-display font-black text-[#254c3a] text-[34px] tracking-[-2px] mb-0">
          {bottomEvent.day}
          <sup className="text-lg">{bottomEvent.suffix}</sup> {bottomEvent.month}
        </p>

        <h3 className="font-display font-black text-[#254c3a] text-[48px] tracking-[-4px] uppercase leading-[42px] mb-2">
          {bottomEvent.title}
        </h3>

        <p className="font-body text-[#254c3a] text-[14px] tracking-wide uppercase leading-[20px]">
          {bottomEvent.description}
        </p>

        {/* BOTTOM LOCATION — pushed to bottom of card */}
        <p className="font-body text-[#254c3a] text-[12px] tracking-wide uppercase mt-auto">
          {bottomEvent.location}
        </p>
      </div>
    </div>
  )
}

export default EventCard