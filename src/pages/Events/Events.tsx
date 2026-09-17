import EventCard from '../../components/ui/EventCard'

const Events = () => {

  return (

    <section className="relative min-h-screen bg-[#60785e] overflow-hidden flex flex-col justify-center">

      {/* Main container */}
      <div className="w-[98%] max-w-[1800px] mx-auto">

        {/* TITLE */}
        <div className="mb-16">

          <p className="font-display font-black text-[#f2eae0] text-4xl leading-none">
            UPCOMING
          </p>

          <h1 className="font-display font-black text-[#f2eae0] text-[clamp(4.2rem,9.6vw,8.4rem)] leading-[0.9] -mt-2">
            EVENTS
          </h1>

        </div>


        {/* EVENT CARDS */}
        <div className="relative flex items-start justify-center">

          {/* CARD 1 */}
          <EventCard
            topEvent={{
              day: "24",
              suffix: "th",
              month: "sept",
              title: "Games Night",
              description: "lorem ipsum dolor sit amet consectetur adipiscing elit laborum o facere animi reprehenderit nisi velit corrupti id d",
              location: "Leeds University Union",
            }}
            bottomEvent={{
              day: "28",
              suffix: "th",
              month: "sept",
              title: "Study Circle",
              description: "lorem ipsum dolor sit amet consectetur adipiscing elit laborum occaecat a assumenda facere animi reprehenderit nisi velit corrupti id d",
              location: "Leeds University",
            }}
            rotate="-rotate-11 z-10 -mr-[1.5vw]"
          />


          {/* CARD 2 — HIGHER */}
          <EventCard
            topEvent={{
              day: "2",
              suffix: "nd",
              month: "oct",
              title: "Friday Khutbah",
              description: "lorem ipsum dolor sit amet consectetur veniam assumenda facere animi reprehenderit nisi velit corrupti id d",
              location: "Leeds University Union",
            }}
            bottomEvent={{
              day: "5",
              suffix: "th",
              month: "oct",
              title: "Brothers' Social",
              description: "lorem ipsum dolor sit amet consectetur adipiscing elit laborum occaecat aliqua est labore optio veniam assumenda facere animi reprehenderit nisi velit corrupti id d",
              location: "Leeds",
            }}
            rotate="rotate-1 z-20 -mr-[1.5vw] -translate-y-[12rem]"
          />


          {/* CARD 3 */}
          <EventCard
            topEvent={{
              day: "10",
              suffix: "th",
              month: "oct",
              title: "Sisters' Circle",
              description: "sit amet consectetur adipiscing elit laborum occaecat aliqua est labore optio veniam assumenda facere animi reprehenderit nisi velit corrupti id d",
              location: "Leeds University",
            }}
            bottomEvent={{
              day: "12",
              suffix: "th",
              month: "oct",
              title: "Community Dinner",
              description: "lorem ipsum dolor sit amet consectetur adipiscing elit laborum occaecat aliqua est labore optio veniam re animi reprehenderit nisi velit corrupti id d",
              location: "Leeds University Union",
            }}
            rotate="rotate-11 z-30 -mr-[1.5vw]"
          />

        </div>

      </div>

    </section>
  )
}

export default Events