import { AboutUs, AboutUs2, Home, Events, Committee, Resources, Maps, Announcements, StudentSupport, FAQ } from './pages'
import GetInvolved from './pages/GetInvolved/GetInvolved'

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
      <Maps/>
      <FAQ />
    </>
  )
}

export default App