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
      className={`bg-[#f2eae0] rounded-[30px] shadow-[0_8px_20px_rgba(0,0,0,0.3)] p-6 w-[27vw] max-w-[345px] min-h-[32rem] flex flex-col ${rotate}`}
    >

      {/* TOP EVENT */}

      <div className="flex-1 flex flex-col">

        <p className="font-display font-black text-[#254c3a] text-[25px] mb-2">

          {topEvent.day}

          <sup className="text-sm">{topEvent.suffix}</sup> {topEvent.month}

        </p>

        <h3 className="font-display font-black text-[#254c3a] text-[34px] uppercase leading-[31px] mb-4">

          {topEvent.title}

        </h3>

        <p className="font-body text-[#254c3a] text-[14px] tracking-wide uppercase leading-[21px]">

          {topEvent.description}

        </p>

        {/* TOP LOCATION — pushed to bottom of top half */}

        <p className="font-body text-[#254c3a] text-sm tracking-wide uppercase mt-auto">

          {topEvent.location}

        </p>

      </div>

      {/* CENTRE DIVIDER */}

      <div className="border-t-[3px] border-[#254c3a] my-6" />

      {/* BOTTOM EVENT */}

      <div className="flex-1 flex flex-col">

        <p className="font-display font-black text-[#254c3a] text-[25px] mb-2">

          {bottomEvent.day}

          <sup className="text-sm">{bottomEvent.suffix}</sup> {bottomEvent.month}

        </p>

        <h3 className="font-display font-black text-[#254c3a] text-[34px] uppercase leading-[31px] mb-4">

          {bottomEvent.title}

        </h3>

        <p className="font-body text-[#254c3a] text-[14px] tracking-wide uppercase leading-[21px]">

          {bottomEvent.description}

        </p>

        {/* BOTTOM LOCATION — pushed to bottom of card */}

        <p className="font-body text-[#254c3a] text-sm tracking-wide uppercase mt-auto">

          {bottomEvent.location}

        </p>

      </div>

    </div>

  )

}

export default EventCard