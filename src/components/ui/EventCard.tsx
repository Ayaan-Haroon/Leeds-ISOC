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
      className={`bg-[#f2eae0] rounded-[40px] shadow-[0_10px_25px_rgba(0,0,0,0.3)] p-8 w-[30vw] max-w-[525px] min-h-[48rem] flex flex-col ${rotate}`}
    >

      {/* TOP EVENT */}
      <div className="flex-1 flex flex-col">

        <p className="font-display font-black text-[#254c3a] text-[36px] mb-2">
          {topEvent.day}
          <sup className="text-lg">{topEvent.suffix}</sup> {topEvent.month}
        </p>

        <h3 className="font-display font-black text-[#254c3a] text-[48px] uppercase leading-[42px] mb-4">
          {topEvent.title}
        </h3>

        <p className="font-body text-[#254c3a] text-[18px] tracking-wide uppercase leading-[28px]">
          {topEvent.description}
        </p>

        {/* TOP LOCATION — pushed to bottom of top half */}
        <p className="font-body text-[#254c3a] text-base tracking-wide uppercase mt-auto">
          {topEvent.location}
        </p>

      </div>

      {/* CENTRE DIVIDER */}
      <div className="border-t-[4px] border-[#254c3a] my-8" />

      {/* BOTTOM EVENT */}
      <div className="flex-1 flex flex-col">

        <p className="font-display font-black text-[#254c3a] text-[36px] mb-2">
          {bottomEvent.day}
          <sup className="text-lg">{bottomEvent.suffix}</sup> {bottomEvent.month}
        </p>

        <h3 className="font-display font-black text-[#254c3a] text-[48px] uppercase leading-[42px] mb-4">
          {bottomEvent.title}
        </h3>

        <p className="font-body text-[#254c3a] text-[18px] tracking-wide uppercase leading-[28px]">
          {bottomEvent.description}
        </p>

        {/* BOTTOM LOCATION — pushed to bottom of card */}
        <p className="font-body text-[#254c3a] text-base tracking-wide uppercase mt-auto">
          {bottomEvent.location}
        </p>

      </div>

    </div>
  )
}

export default EventCard