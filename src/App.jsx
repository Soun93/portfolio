import './App.css'
import Logo from './components/Logo/Logo'
import AboutSection from './components/AboutSection/AboutSection'
import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import Nav from './components/Nav/Nav'
import BackgroundSection from './components/BackgroundSection/BackgroundSection'
import SkillSection from './components/SkillSection/SkillSection'
import ProyectSection from './components/ProyectSection/ProyectSection'
import Pagination from './components/CommonComponents/Pagination'

function App() {

  return (
    <>
      <header id='home'>
        <Logo />
        <Nav />
      </header>
      <div>
        <WelcomeSection />
        <AboutSection />
        <BackgroundSection />
        <SkillSection />
        <ProyectSection />
      </div>
    </>
  )
}

export default App
