import './App.css';
import AboutSection from './components/about';
import Navbar from './components/navbar';
import PastWorkSection from './components/pastWork';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutSection />
      <PastWorkSection />
    </div>
  );
}

