import Home from "./Components/Home/Home";
import {  useSelector } from "react-redux";
import Modal from "./Components/Portal/Modal";
import AboutMe from "./Components/AboutMe/AboutMe";


function App() {
  const menu = useSelector((state) => state.PortalSlice.isMenuOpen);
  console.log(menu);

  return (
    <>
     <Home/>
     {
      menu ? <Modal/> : null
     }
    
    </>
  );
}

export default App;
