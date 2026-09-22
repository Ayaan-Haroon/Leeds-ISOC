// src/pages/Events/EventsResponsive.tsx

import Events from './Events'
import EventsMobile from './EventsMobile'

const EventsResponsive = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden min-[641px]:block">
        <Events />
      </div>

      {/* Mobile */}
      <div className="block min-[641px]:hidden">
        <EventsMobile />
      </div>
    </>
  )
}

export default EventsResponsive