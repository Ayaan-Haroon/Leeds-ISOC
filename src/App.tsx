import { AboutUs, AboutUs2, Home, Events, Committee, Resources, Maps, Announcements, StudentSupport, FAQ, Footer,AboutUs2Responsive, AnnouncementsResponsive, CommitteeResponsive, ResourcesResponsive, GetInvolvedResponsive, MapsResponsive, FAQResponsive} from './pages'


import OurSponsorsResponsive from './pages/OurSponsors/OurSponsorsResponsive'

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
      <GetInvolvedResponsive/>
      <OurSponsorsResponsive/>
      <MapsResponsive/>
      <FAQResponsive/>
      <Footer/>
      
    </>
  )
}

export default App