import "./style/App.css";

import { Nav } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AllRoutes } from "./components/allRoutes";


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <AllRoutes></AllRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
