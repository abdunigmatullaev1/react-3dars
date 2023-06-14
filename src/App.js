import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Topphone from './components/Topphone/Topphone';
import Menu from './components/Menu/Menu';
import Karusel from './components/Karusel/Karusel';

function App() {
  return (
    <div className="App">
      <Topphone />
      <Hero />
      <Header />
      <Menu />
      <Karusel />
    </div>
  );
}

export default App;
