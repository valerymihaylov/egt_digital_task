import Header from "./sections/Header"
import Slider from "./sections/Slider";

import './App.css'
import Info from "./sections/Info.jsx";
import Products from "./sections/Products.jsx";
import Solution from "./sections/Solution.jsx";
import Footer from "./sections/Footer.jsx";
import useLocalStorage from "use-local-storage";


function App() {

    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
      <div className="app" data-theme={isDark ? "dark" : "light"}>
          <Header isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
          <Slider />
          <Info />
          <Products />
          <Solution />
          <Footer />
      </div>
  )
}

export default App
