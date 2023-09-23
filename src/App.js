
import './App.css';
import { Nav, Hero, Highlights, Plans, Discover, Best, FlinNews, Footer } from './Components/container';



function App() {
  return (
    <div className="App bg-gray-900 text-gray-50">
      <Nav />
      <Hero />
      <Highlights/>
      <Plans />
      <Discover />
      <Best />
      <FlinNews/>
      <Footer/>
    </div>
  );
}

export default App;
