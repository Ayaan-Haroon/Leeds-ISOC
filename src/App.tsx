import { AboutUs, AboutUs2, Home, Events, Committee, Resources, Maps, Announcements, StudentSupport, FAQ } from './pages'
import GetInvolved from './pages/GetInvolved/GetInvolved'
import OurSponsors from './pages/OurSponsors/OurSponsors'

function App() {
  return (
    <>
      <Home />
      <Announcements/>
      <AboutUs />
      <AboutUs2/>
      <Events/>
      <StudentSupport/>
      <Committee/>
      <Resources/>
      <GetInvolved/>
      <OurSponsors/>
      <Maps/>
      <FAQ />
    </>
  )
}

export default App