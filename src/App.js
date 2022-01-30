import NavBar from './components/NavBar/NavBar.js' // Import NavBar component
import About from './components/About/About.js'
import Home from './components/Home/Home.js' // Import Home component
import Skills from './components/Skills/Skills.js' // Import Skills component
//import YouTube from './components/YouTube/YouTube.js'
import Contact from './components/Contact/Contact.js'


const App = () => {
  return (
    <div className="App">
      < NavBar />
      < Home / >
      < About />
      < Skills />
      < Contact />
    </div>
  );
}

export default App;
