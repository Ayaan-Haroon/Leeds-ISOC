import { AboutUs, AboutUs2, Home, Events, Committee, Resources, Maps, Announcements, StudentSupport, FAQ, Footer,AboutUs2Responsive, AnnouncementsResponsive, CommitteeResponsive, ResourcesResponsive} from './pages'
import GetInvolved from './pages/GetInvolved/GetInvolved'
import OurSponsors from './pages/OurSponsors/OurSponsors'

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Home />
      <AnnouncementsResponsive />
      <AboutUs2Responsive/>
      <Events/>
      <CommitteeResponsive/>
      <ResourcesResponsive/>
      <GetInvolved/>
      <OurSponsors/>
      <Maps/>
      <FAQ />
      <Footer/>
      
    </>
  )
}

export default App