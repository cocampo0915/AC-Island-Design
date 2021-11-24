import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import WhatWeOffer from './components/WhatWeOffer/WhatWeOffer';
import JoinServer from './components/JoinServer/JoinServer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutUs />
      <WhatWeOffer />
      <JoinServer />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
