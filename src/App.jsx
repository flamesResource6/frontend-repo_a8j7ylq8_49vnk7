import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Expertise from './components/Expertise'
import Offers from './components/Offers'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <div id="expertise"><Expertise /></div>
      <div id="offers"><Offers /></div>
      <div id="courses"><Courses /></div>
      <div id="blog"><Blog /></div>
      <Contact />
      <footer className="py-10 text-center text-slate-400 bg-slate-950">
        © {new Date().getFullYear()} elev8. All rights reserved.
      </footer>
    </div>
  )
}

export default App
