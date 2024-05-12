import Header from "./sections/Header"
import Slider from "./sections/Slider";

import './App.css'
import Info from "./sections/Info.jsx";
import Products from "./sections/Products.jsx";
import Solution from "./sections/Solution.jsx";
import Footer from "./sections/Footer.jsx";

function App() {

  return (
      <>
          <Header/>
          <Slider />
          <Info />
          <Products />
          <Solution />
          <Footer />
      </>
  )
}

export default App
