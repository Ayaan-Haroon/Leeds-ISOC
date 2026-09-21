import Announcements from './Announcements'
import AnnouncementsMobile from './AnnouncementsMobile'

const AnnouncementsResponsive = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden min-[641px]:block">
        <Announcements />
      </div>

      {/* Mobile */}
      <div className="block min-[641px]:hidden">
        <AnnouncementsMobile />
      </div>
    </>
  )
}

export default AnnouncementsResponsive