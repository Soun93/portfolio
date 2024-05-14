import './App.css'
import Logo from './components/Logo/Logo'
import AboutSection from './components/AboutSection/AboutSection'
import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import Nav from './components/Nav/Nav'
import BackgroundSection from './components/BackgroundSection/BackgroundSection'
import SkillSection from './components/SkillSection/SkillSection'

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
      </div>
    </>
  )
}

export default App
