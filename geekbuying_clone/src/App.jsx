import "./style/App.css";

import { NavbarTop, Navbar, NavbarBottom } from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <NavbarTop></NavbarTop>
      <Navbar></Navbar>
      <NavbarBottom></NavbarBottom>

    </div>
  );
}

export default App;
